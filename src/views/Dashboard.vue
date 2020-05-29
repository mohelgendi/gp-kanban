<template>
  <div>
    <SideNavBar />
    <Board/>
  </div>
</template>

<script>
import SideNavBar from '../components/SideNavBar'
import Board from '../components/Board'
export default {
  name: 'Dashboard',
  components: { SideNavBar, Board },
  beforeCreate () {
    document.body.className = 'dashboard'
  }
}
</script>

<style scoped>

</style>
