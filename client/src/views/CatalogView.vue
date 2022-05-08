<template>

  <div class="bookzone">

    <div id="header">

      <div id="bar">
        <input type="text" id="looking" placeholder="Looking for a Superhero ?" @keyup="looking($event)">
      </div>

    </div>

    

    <div id="etagere">

      <div id="fail" v-show="notfound">
        <p>No results found</p>
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

    async fetchData() {
      const response = await axios.get(`http://localhost:3000/api/book`);

      this.bibli = response.data.livres;

    },

    addToCart(book) {
      this.panier.push(book);
      console.log(this.panier);
    },

    removeFromCart(book) {
      this.panier.splice(this.panier.indexOf(book), 1);
      console.log(this.panier);
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
}

#looking {
  width: 50%;
  border: none;
  border-bottom: 1px solid #F27121;
  border-radius: 5px;
  font-size: 1.5rem;
  color: white;

  padding: 1vh;
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
