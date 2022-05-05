<template>

  <div id="book">

    <img :src="couverture" :alt="titre">

    <div id="soustitre">

      <p>{{ titre }}</p>

      <div id="soussous">

        <p>{{ auteur }}</p>

        <p>Remaining : {{ quantite }}</p>

      </div>

    </div>

  </div>

</template>

<script>

const axios = require('axios');


export default {

  props: {

    bookId: {
      type: Number,
      required: true
  
    },


  },

  data() {
    return {
      titre : String,
      auteur : String,
      couverture : String,
      quantite : Number,
    }
  },

  methods: {

    async fetchData() {

      const response = await axios.get(`http://localhost:3000/api/book/${this.bookId}`);

      // console.log(response.data.livres.titre);
      

      this.titre = response.data.livres.titre;
      this.auteur = response.data.livres.auteur;
      this.couverture = response.data.livres.couverture;
      this.quantite = response.data.livres.quantite;

      

    },

  },

  created() {
    this.fetchData();
  },

}

</script>



<style scoped>

#book{
  /* background-color: #f5f5f5; */
  width: fit-content;
}

img{
  width: 250px;
}

#soustitre{
  display: flex;
  /* background-color: burlywood; */
  flex-direction: column;
  flex-wrap: wrap;
}

#soussous{
  display: flex;
  justify-content: space-between;
}





</style>
