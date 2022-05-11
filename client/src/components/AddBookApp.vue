<template>

  <div id="formbook">

    <div id="bookinput">
    
      <input type="text" v-model= "book.titre" placeholder="Book name">
      <div class="line"></div>
      <input type="text" v-model= "book.auteur" placeholder="Author">
      <div class="line"></div>
      <input type="text" v-model= "book.couverture" placeholder="URL image">
      <div class="line"></div>

      <button class="buttonf" type="reset" @click="prebook" v-show="!previewing"> Preview </button> <br>
      <button class="buttonf" type="reset" @click="addbook" v-show="previewing"> Addbook </button>

    </div>

    <div id="bookpreview" v-show="previewing">

      <BookApp :book="book"/>

    </div>


  </div>


</template>

<script>
import BookApp from './BookApp.vue';


export default {
    props: {},

    data() {
        return {
            book: {
                titre: "test",
                auteur: "test",
                couverture: "https://i.annihil.us/u/prod/marvel/i/mg/d/d0/62685178d7132/clean.jpg",
                quantite: 5
            },

            previewing : false
        };
    },

    methods: {

      prebook() {
        console.log(this.book.titre);
        console.log(this.book.auteur);
        console.log(this.book.couverture);

        this.previewing = true;
      },

      addbook() {
          console.log(this.book.titre);
          console.log(this.book.auteur);
          console.log(this.book.couverture);
      },
    },

    computed: {},
    watch: {},
    created() {
    },
    components: { BookApp }
}

</script>



<style scoped>

  #formbook {
    width: 60rem;
    height: 33rem;
    /* background-color: chartreuse; */
    display: flex;

    border: #E94057 solid 4px;
    border-radius: 5px;
    
    justify-content: space-around;
    align-items: center;
  }

  input {
    width: 20rem;
    height: 2rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: none;
    
    color: white;
    font-size: 1.5rem;
  }

  #bookinput {
    /* background-color: #F27121; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .buttonf {
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);

  
  width: 20em;
  color: #fff;
  padding: 1vh;
  border-radius: 5px;
  font-size: 2vh;
  cursor: pointer;

  }

  .line{
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);
  margin-bottom: 2em;
}



</style>
