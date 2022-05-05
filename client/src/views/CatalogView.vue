<template>

  <div class="bookzone">

    <h1>Catalog</h1>

    

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
