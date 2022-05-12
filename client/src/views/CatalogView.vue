<template>

  <div class="bookzone">

    <div id="header">

      <div id="bar">
        <input type="text" id="looking" placeholder="Looking for a Superhero ?" @keyup="looking($event)">
        <div class="line"></div>
      </div>

      <button @click="devadmin">admin mode</button>

    </div>

    <div id="zoneadd" v-show="admin">
      <AddBookApp @newbook ="newcomics($event)"></AddBookApp>
    </div>

    

    <div id="etagere">

      <div id="fail" v-show="notfound">
        <p>No results found</p> <br>
        <img :src="deadpool" id="deadpoolpic">
      </div>

      <div v-for="item in bibli" :key="item.id">

        <div class="book">
          <BookApp :book="item" @addbook ="addToCart($event)" @removebook ="removeFromCart($event)" @delbook="delatebook($event)" :admin="admin"  />
        </div>

      </div>


    </div>


    
  </div>

</template>



<script>

const axios = require('axios');


import BookApp from "../components/BookApp.vue"
import AddBookApp from "@/components/AddBookApp.vue";


export default {

  components: {
    BookApp,
    AddBookApp
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

      deadpool : 'https://i.kym-cdn.com/photos/images/facebook/000/652/022/3d9.png',

      admin : false

    }
  },


  methods: {

    async fetchData() {
      const response = await axios.get(`http://localhost:3000/api/book`);

      this.bibli = response.data.livres;

    },

    addToCart(book) {
      const id_user = 1;

      console.log(book);

      this.panier.push(book);
      axios.post(`http://localhost:3000/api/${id_user}/${book.id}`);
      console.log(`${book.titre} ajouté au panier`);
    },

    removeFromCart(book) {
      const id_user = 1;

      this.panier.splice(this.panier.indexOf(book), 1);
      axios.delete(`http://localhost:3000/api/${id_user}/${book.id}`);
      console.log(`${book.titre} retiré du panier`);
    },

    delatebook(book) {

      this.bibli.splice(this.bibli.indexOf(book), 1);

      console.log(book.id)
      
      axios.delete(`http://localhost:3000/api/deletebook`, {
        
        params : {
          idbook : book.id
        }
      
      });


      console.log(`${book.titre} supprimé de la bibliothèque`);
    },

    looking(event) {
      console.log(event.target.value);

      const search = event.target.value;

      if (search.length > 2) {
        
        axios.get(`http://localhost:3000/api/lookingfor/${search}`)

        .then(response => {
          this.bibli = response.data.livres;
          
          if (this.bibli.length === 0) {
            this.notfound = true;
          }

        })
      }

      else {
        this.notfound = false;
        this.fetchData();
      }

    },

    devadmin() {
      this.admin = !this.admin;
    },

    newcomics(book){

      console.log("ceci est un test pour le book :" + book);

      this.bibli.push(book);
    }

  },

  created() {
    this.fetchData();
  },

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

#zoneadd {
  width: 100%;
  /* background-color: #F27121; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
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
