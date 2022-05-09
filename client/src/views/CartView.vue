<template>

  <div class="bookzone">    

    <div id="etagere">

      <div id="fail" v-show="notfound">
        <p>No books borrow yet</p>
        <img :src="deadpool" id="deadpoolpic">
      </div>

      <div v-for="item in bibli" :key="item.id">

        <div class="book">
          <BookApp :book="item" @addbook = "addToCart($event)" @removebook = "removeFromCart($event)" />
        </div>

      </div>


    </div>


    
  </div>

</template>



<script>

const axios = require('axios');


import BookApp from "../components/BookApp.vue"


export default {

  components: {
    BookApp,
},

  data() {
    return {

      id_user : {
        type : Number,
        required : true
      },

      bibli : [],
      panier : [],

      notfound : false,

      deadpool : 'https://i.kym-cdn.com/photos/images/facebook/000/652/022/3d9.png'

    }
  },


  methods: {

    async fetchPanier() {

      const response = await axios.get(`http://localhost:3000/api/cart`);

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
      const id_user = 1;

      this.panier.push(book);
      axios.post(`http://localhost:3000/api/${id_user}/${book.id}`);
      console.log(`${book.titre} ajouté au panier`);
    },

    removeFromCart(book) {
      const id_user = 1;

      this.panier.splice(this.panier.indexOf(book), 1);
      axios.delete(`http://localhost:3000/api/${id_user}/${book.id}`);
      this.fetchPanier();
      console.log(`${book.titre} retiré du panier`);
      console.log("test bibli",this.bibli);
    }

  },

  created() {
    this.fetchPanier();
  }

}

</script>




<style scoped>

* {
  /* background-color: brown; */
  margin: 0.2vh;
}

#header {
  display: flex;
  /* background-color : red; */
  width: 100%;
  justify-content: space-between;
  padding-bottom: 5vh;
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
  justify-content: space-between;
}

.book{
  padding-bottom: 20px;
  width: fit-content;
}




</style>
