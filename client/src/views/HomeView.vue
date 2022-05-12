<template>

  <div class="home">

    <h1 id="titre">Efreitheque</h1>

    <div v-show="already"> <LoginApp @switch = "swap"/> </div>

    <div v-show="!already"> <SubApp @switch = "swap"/> </div>

  </div>

</template>


<script>

import LoginApp from "../components/LoginApp.vue";
import SubApp from "../components/SubApp.vue";



export default {

  name: 'HomeView',
  
  components: {
    LoginApp,
    SubApp
  },

  data() {
    return {
      already : false
    }
  },

  methods : {

    swap() {
      console.log('I received an event from the child component')
      this.already = !this.already
    }
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
