<template>


  <div id="books" @click="add()">

    <div id="photo">

      <div id="added" v-show="adding"> Added !</div>

      <img :src="couverture">

    </div>

    <div id="soustitre">

      {{ titre }}

      <div id="soussous">

        {{ auteur }}

        Remaining : {{ stock }} 


      </div>

    </div>

    <div id="del" v-show="admin" @click = "delbook">
      <button id="ate"> ⚠️ REMOVE ⚠️ </button>
    </div>

  </div>

</template>

<script>




export default {

  props: {

    book: {
      type: Object,
      required: true
    },

    isadded : {
      type : Boolean,
      required : false
    },

    
    admin : {
      type : Boolean,
      required : false
    }
  


  },

  data() {

    return {
      titre : String,
      auteur : String,
      couverture : String,
      quantite : Number,
      state : ['✅', '❌'],
      adding : false,
    }
    
  },

  methods: {

    fetchData() {

      // console.log(this.book);
      

      this.titre = this.book.titre;
      this.auteur = this.book.auteur;
      this.couverture = this.book.couverture;
      this.quantite = this.book.quantite;


    },

    add() {
      if (!this.admin) {
        if (this.quantite > 0) {
          this.adding = !this.adding;

          if (this.adding) {
            this.$emit('addbook', this.book);
          }

          else {
            this.$emit('removebook', this.book);
          }
        }

        else {
          alert("Out of stock !");
        }
      }

    },

    isitadded() {
      if (this.isadded) {
        this.adding = true;
      }
    },

    delbook(){

      if (this.admin) {
        this.$emit('delbook', this.book);
      }

      alert(this.book.titre + " has been deleted");
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
    this.isitadded();
  },

}

</script>



<style scoped>

#added{
  color: black;
  font-size: 1.5rem;
  background: linear-gradient(to left, #11998e, #38ef7d);
  border: #2b2b31 solid 1px;
  position: absolute;
  width: 300px;
  /* z-index: 2; */
}

#books{
  background-color: #2b2b31;
  width: 300px;
  height: fit-content;
}

#books:hover{
  background-color: #2b2b31;
  width: 300px;
  
  box-shadow: inset 0 0 1em gold, 0 0 2em red;
}


img{
  width: 300px;
  height: 461px;
  /* z-index: 1; */
}

#soustitre{
  display: flex;
  background-color: #2b2b31;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;
}

#soussous{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #2b2b31;
}

#del{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #2b2b31;
}

#ate{
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);
  color: white;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 80%;
  cursor: pointer;
}

</style>
