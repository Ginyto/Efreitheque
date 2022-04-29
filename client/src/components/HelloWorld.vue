<template>

  <div>

    <h1> {{message}} </h1>

  </div>

</template>

<script>

import axios from 'axios'


export default {
  name: 'HelloWorld',

  data() {
    return {
      message: "This is a message from the localhost"
    }
  },

  async created(){

    const response = await axios.get('http://localhost:8080/api/hello')
    this.message = response.data.message

  } 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
