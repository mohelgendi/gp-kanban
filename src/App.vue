<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Ubuntu;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  html, body {
    height: 100%;
    overflow: auto;
  }

  body.login, body.home, body.signup {
    background-image: linear-gradient(to right top, #220083, #2c2a9a, #3a49af, #4c65c2, #6282d3, #5f97e2, #61abee, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .dashboard {
    background-color: #ccdffa;
    margin-left: 70px; /* Same as the width of the sidenav */
    transition: 0.5s;
  }
.btn-linko {
  color: #616161 !important;
}
.btn-linkr {
  color: #263646 !important;
}
</style>
