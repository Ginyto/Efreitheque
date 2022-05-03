<template>

  <nav>

    <router-link to="/">Home</router-link> |
    <router-link to="/book">Book</router-link>

  </nav>

  <router-view/>

</template>



<style>
* {
  background-color: #303037;
  color: #F1F1F1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F1F1F1;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  background: linear-gradient(to left, #59C173, #a17fe0, #5D26C1);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav a.router-link-exact-active {
  background: linear-gradient(to left, #8A2387, #E94057, #F27121);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
