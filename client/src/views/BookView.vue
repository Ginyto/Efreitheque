<template>

  <div class="about">

    <h1>All our Books</h1>

    

      <div id="etagere" v-for="item in items" :key="item.id">
        <BookApp :bookId = "1"></BookApp>
      </div>
    
      


    
  </div>

</template>



<script>
import BookApp from "../components/BookApp.vue"

export default {

  components: {
    BookApp
},

  data() {
    return {
      bibli : [5]
    }
  },

  methods: {
  
  },

}

</script>




<style scoped>

#etagere{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


</style>
