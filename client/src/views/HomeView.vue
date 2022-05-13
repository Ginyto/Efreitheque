<template>

  <div class="home">

    <h1 id="titre">Efreitheque</h1>

    <LoginApp/>

  </div>

</template>


<script>

import LoginApp from "../components/LoginApp.vue";



export default {

  name: 'HomeView',
  
  components: {
    LoginApp,
  },

  data() {
    return {
      already : false
    }
  },

  methods : {

  }

}

</script>


<style scoped>

#titre{
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
}

</style>
