<template>

  <div id="formbook">

    <div id="bookinput">
    
      <input type="text" v-model= "titre" placeholder="Book name">
      <div class="line"></div>
      <input type="text" v-model= "auteur" placeholder="Author">
      <div class="line"></div>
      <input type="text" v-model= "publication" placeholder="Publication">
      <div class="line"></div>
      <input type="text" v-model= "couverture" placeholder="URL image">
      <div class="line"></div>

      
      <button class="buttonf" type="reset" @click="addbook" > Addbook </button>

    </div>


  </div>


</template>

<script>
import axios from 'axios';




export default {

    props: {},

    data() {
        return {
            
            titre: '',
            auteur: '',
            publication: '',
            couverture: '',

        };
    },

    methods: {

        addbook() {
          if (this.titre != '' && this.auteur != '' && this.publication != '' && this.couverture != '') {

            console.log(this.titre);
            console.log(this.auteur);
            console.log(this.publication);
            console.log(this.couverture);
            

            this.previewing = true;

            const res = axios.post(`http://localhost:3000/api/addbook`,{}, {
              
              params : {

                titre: this.titre,
                auteur: this.auteur,
                publication: this.publication,
                couverture: this.couverture,
              }


            });

            console.log(res);

            this.titre = '';
            this.auteur = '';
            this.publication = '';
            this.couverture = '';


            this.$emit('majbook');

            alert('Book added');


          }

          else {
            alert('Please fill all the fields');
          }
          
        }
      },



    computed: {},
    watch: {},
    created() {
    },

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
