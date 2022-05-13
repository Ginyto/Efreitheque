<template>

  <div class="login">

    <br>

    <h2 id="titre_login">{{titre}}</h2> <br>



    <div id="saisie">

      <div id="pseudo" class ="inputs">
        👤 : <input type="text" id="input_pseudo" v-model ="username" placeholder="Pseudo">
        <div class="line"></div>
      </div>

      <br>

      <div id="password" class ="inputs">
        🔒 : <input type="password" id="input_password" v-model ="mdp" placeholder="Password">
        <div class="line"></div>
      </div>

      <br><br>

      <div id="log_button">
        <button v-show="logsub" id="button_login" type="submit" @click ="login()"> Log in </button>
        <button v-show="!logsub" id="button_login" type="submit" @click ="signup()"> Sign up </button>
      </div>

      <div id="sub"> <br>
        <p id="create" @click ="swap()" >{{ indication }}</p>
      </div>

    </div>

  </div>

</template>

<script>

const axios = require('axios');

import router from '../router/index.js'


export default {

  data() {
    return {

      username : '',
      mdp : '',

      titre : 'LOG IN',
      indication : "Don't have an acount ? \n Create one",

      logsub : true,


      session : {

        userid : 0,
        username : '',
        token : '',
        admin : false

      }

    }
  },

  methods: {

      sessionUp() {
        sessionStorage.setItem('userid', this.session.userid);
        sessionStorage.setItem('username', this.session.username);  
        sessionStorage.setItem('token', this.session.token);
        sessionStorage.setItem('admin', this.session.admin);
      },

      swap() {
        console.log('I ask a switch')

        this.logsub = !this.logsub

        if (this.logsub) {
          console.log("log mode")

          this.titre = "LOG IN"
          this.indication = "Don't have an acount ? \n Create one"
        }
        else{
          console.log("sub mode")

          this.titre = "SIGN UP"
          this.indication = "Already have an acount ? \n Log here"
        }

      },

      login() {
        console.log('login -> : ' + this.username + ' ' + this.mdp)

        axios.post('http://localhost:3000/api/login', {}, {

          params : {
            name : this.username,
            mdp : this.mdp
            
          }

        }).then(response => {
          console.log(response.data)
          console.log(response.data.token)
          if (response.data.auth == true) {

            this.session.userid = response.data.user.id
            this.session.username = this.username
            this.session.token = 'Bearer ' + response.data.token
            this.session.admin = response.data.user.admin

            console.log(this.session)

            this.sessionUp()

            this.$emit('login')
            router.push('/catalog')

          }
          else {
            alert(response.data.message)
            this.username = ''
            this.mdp = ''
          }
      }).catch(error => {
        console.log(error)
      })

      },

      signup() {
        console.log('signup -> : ' + this.username + ' ' + this.mdp)

        axios.post('http://localhost:3000/api/signup', {},{

          params : {
            name : this.username,
            mdp : this.mdp
            
          }

        }).then(response => {
          console.log(response.data)
          if (response.data.sign == true) {
            this.swap()
          }
          else {
            alert(response.data.message)
            this.username = ''
            this.mdp = ''
          }
      }).catch(error => {
        console.log(error)
      })

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
  cursor: pointer;
}




</style>
