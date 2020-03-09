<template>
  <div id="login-page">
  </div>
</template>

<script>
export default {
  name: 'Login',
  beforeCreate: function () {
    document.body.className = 'login'
  },
  beforeDestroy () {
    document.body.className = ''
  }
}
</script>

<style scoped>
#login-page {
  background-image: linear-gradient(to right bottom, #22128e, #23289d, #263bab, #2a4cb9, #315dc6, #1e72d6, #0586e3, #009aef, #00b5fa, #00cefc, #00e5f8, #5ffbf1);
}
</style>
