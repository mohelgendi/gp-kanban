<template>
  <div>
    <div class="bottom-footer">
      <div id="footer-menu">
        <ul>
          <li><img src="img/icons/m.png" height="20" width="auto"></li>
          <li> By @mohelgendi</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.bottom-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:#1100423b;
  color: rgba(255, 255, 255, 0.616);
  text-align: center;
}
#footer-menu ul {
  list-style: none;
}
#footer-menu li {
  display: inline;
}
#footer-menu {
  margin-top: 1rem;
}
</style>
