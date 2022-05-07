<template>

  <div class="bookzone">

    <div id="header">

      <h1>Catalog</h1>

    </div>

    

    <div id="etagere">

      <div v-for="item in bibli" :key="item.id">

        <div class="book">
          <BookApp :book="item" />
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
      bibli : [],
      panier : 'https://cdn-icons.flaticon.com/png/512/4009/premium/4009037.png?token=exp=1651949139~hmac=fbae52d605d190bd067c248ef0a3d6dd'
    }
  },


  methods: {

    async fetchData() {
      const response = await axios.get(`http://localhost:3000/api/book`);

      this.bibli = response.data.livres;

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
  justify-content: center;
  padding-bottom: 5vh;
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
