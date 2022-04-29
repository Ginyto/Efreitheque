<template>

  <div>

    <h1 v-bind="sayHello()" > Ceci est notre message {{message}} </h1>

  </div>

</template>

<script>

import axios from 'axios'


export default {
  name: 'HelloWorld',

  data() {
    return {
      message: String
    }
  },

  methods: {

    async sayHello() {

      const res = await axios.get('http://localhost:3000/api/hello')

      console.log(res)

      this.message = res.data.message

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
