<template>

  <div class="login">

    

    <br>

    <h2 id="titre_login">LOG IN</h2>



    <div id="saisie">

      <div id="pseudo" class ="inputs">
        👤 : <input type="text" id="input_pseudo" placeholder="Pseudo">
        <div class="line"></div>
      </div>

      <br>

      <div id="password" class ="inputs">
        🔒 : <input type="text" id="input_password" placeholder="Password">
        <div class="line"></div>
      </div>

      <br><br>

      <div id="log_button">
        <button id="button_login" type="submit"> Log in </button>
      </div>

      <div id="sub">
        <p>Don't have an acount ?</p> <p id="create" v-on:click="swap()" >Create one</p>
      </div>

    </div>

  </div>

</template>

<script>

// const axios = require('axios');
// const url = 'http://localhost:3000/api/';

export default {

  data() {
    return {
      
    }
  },

  methods: {
      
      swap() {
        this.$emit('switch')
        console.log('I ask a switch')
      }
  
  },

}

</script>



<style scoped>

#titre_login{
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#saisie{
  display: flex;
  flex-direction: column;
  /* background-color: #E94057; */

  justify-content: center;
  align-items: center;
}

.inputs{

  padding: 10px;
  width: fit-content;

}

.line{
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);
}

#input_pseudo, #input_password{

  border: none;

}

#log_button{
  display: flex;

  justify-content: center;
}

#button_login{
  background: linear-gradient(to left, #8A2387, #E94057, #F27121);
  color: #F1F1F1;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  width: 200px;
}

#create{
  font-weight: bold;
  background: linear-gradient(to left, #8A2387, #E94057, #F27121);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}




</style>
