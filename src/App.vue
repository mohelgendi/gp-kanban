<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  html, body {
    height: 100%;
  }
  body.login {
    background-image: linear-gradient(to right top, #220083, #2c2a9a, #3a49af, #4c65c2, #6282d3, #5f97e2, #61abee, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: contain;
  }
</style>
