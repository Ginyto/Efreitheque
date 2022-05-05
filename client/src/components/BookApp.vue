<template>

  <div id="book">

    <img :src="couverture">

    <div id="soustitre">

      {{ titre }}

      <div id="soussous">

        {{ auteur }}

        Remaining : {{ stock }} 


      </div>

    </div>

  </div>

</template>

<script>


export default {

  props: {

    book: {
      type: Object,
      required: true
    }


  },

  data() {

    return {
      titre : String,
      auteur : String,
      couverture : String,
      quantite : Number,
      state : ['✅', '❌']
    }
  },

  methods: {

    fetchData() {

      // console.log(this.book);
      

      this.titre = this.book.titre;
      this.auteur = this.book.auteur;
      this.couverture = this.book.couverture;
      this.quantite = this.book.quantite;


    }

  },

  computed: {
    stock() {

      if (this.quantite > 0) {
        return this.quantite + ' ' + this.state[0];
      } else {
        return this.quantite + ' ' + this.state[1];
      }
    }
  },

  created() {
    this.fetchData();
  },

}

</script>



<style scoped>

#book{
  background-color: #2b2b31;
  width: 300px;
  height: fit-content;
  
}

#book:hover{
  background-color: #2b2b31;
  width: 300px;
  height: 511px;
  box-shadow: inset 0 0 1em gold, 0 0 2em red;
}



img{
  width: 300px;
  height: 461px;
}

#soustitre{
  display: flex;
  background-color: #2b2b31;
  flex-direction: column;
  flex-wrap: wrap;
}

#soussous{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #2b2b31;
}





</style>
