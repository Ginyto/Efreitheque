<template>

  <div id="emprunt" v-show="plenty">
    <h1>What we got here ?</h1>

    <button id="buttonf" @click="borrow()"> Borrow of all them </button>
  </div>

  <div class="bookzone">

    <div id="etagere">

      <div id="fail" v-show="notfound">
        <p>No books borrow yet</p> <br>
        <img :src="deadpool" id="deadpoolpic">
      </div>

      <div v-for="item in bibli" :key="item.id" id="book">

        
        <BookApp :book="item" @addbook = "addToCart($event)" @removebook = "removeFromCart($event)" :isadded ="true" />
        

      </div>


    </div>


    
  </div>

</template>



<script>

const axios = require('axios');


import BookApp from "../components/BookApp.vue"

import router from '../router/index.js'


export default {

  components: {
    BookApp,
},

  data() {
    return {

      bibli : [],
      panier : [],

      notfound : false,

      deadpool : 'https://i.kym-cdn.com/photos/images/facebook/000/652/022/3d9.png',

      plenty : false,

      session : {

        userid : 0,
        username : '',
        token : '',
        admin : false

      }


    }
  },


  methods: {

    async fetchPanier() {

      const response = await axios.get(`http://localhost:3000/api/cart/${this.session.userid}`);

      this.panier = response.data.paniers;

      console.log(this.panier);
      console.log("--->",this.panier.length);

      if (this.panier.length === 0) {
        this.notfound = true;
      }

      else {
        this.notfound = false;

        for (let index = 0; index < this.panier.length; index++) {
          const element = this.panier[index];

          const response = await axios.get(`http://localhost:3000/api/book/${element.id_livre}`);

          this.bibli.push(response.data.livres);

          console.log("here", this.bibli);
        }

      }

    },

    addToCart(book) {

      

      this.panier.push(book);
      axios.post(`http://localhost:3000/api/${this.session.userid}/${book.id}`);
      console.log(`${book.titre} ajouté au panier`);
    },

    removeFromCart(book) {

      this.panier.splice(this.panier.indexOf(book), 1);
      axios.delete(`http://localhost:3000/api/${this.session.userid}/${book.id}`);
      this.bibli = []
      this.fetchPanier();
      console.log(`${book.titre} retiré du panier`);
      console.log("test bibli",this.bibli);
    },

    borrow(){


      console.log(this.panier);

      for (let index = 0; index < this.bibli.length; index++) {

          const element = this.bibli[index];

          axios.post(`http://localhost:3000/api/update/${this.session.userid}/${element.id}/${element.quantite}`);

          console.log("borrowed", element.titre, element.quantite);

          console.log(this.bibli)

          axios.delete(`http://localhost:3000/api/${this.session.userid}/${element.id}`);

        }

        
        this.bibli = []
        this.fetchPanier()

        router.push('/catalog');
      


    },

    syncSession(){
      this.session.userid = sessionStorage.getItem('userid');
      this.session.username = sessionStorage.getItem('username');
      this.session.token = sessionStorage.getItem('token');
      this.session.admin = sessionStorage.getItem('admin');

      if (this.session.admin === 'true') {
        this.administrator = true;
      }
    }

  },

  watch: {

    panier : function () {

      if (this.panier.length > 0) {
        this.plenty = true;
      }

      else {
        this.plenty = false;
      }

    }

  },

  created() {
    this.syncSession();
    this.fetchPanier();
  }

}

</script>




<style scoped>

* {
  /* background-color: brown; */
  margin: 0.2vh;
}

#buttonf {
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);

  
  width: 20%;
  margin-top: 5vh;
  margin-bottom: 5vh;
  color: #fff;
  padding: 1vh;
  border-radius: 5px;
  font-size: 2vh;
  cursor: pointer;

}

#fail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}


#deadpoolpic {
  width: 50vh;
}

#bar {
  display: flex;
  /* background-color : green; */
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#looking {
  width: 50%;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  color: white;
  padding: 1vh;
}
.line{
  width: 50%;
  height: 2px;
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);
}



#etagere{
  display: flex;
  flex-wrap: wrap;
}

#book{
  padding-bottom: 20px;
  width: fit-content;
}




</style>
