<template>
  <div>
    <SideNavBar />
    <Board :board="getBoards[0]"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideNavBar from '../components/SideNavBar'
import Board from '../components/Board'
export default {
  name: 'Dashboard',
  components: { SideNavBar, Board },
  methods: {
  },
  computed: {
    ...mapGetters([
      'getBoards'
    ])
  },
  beforeCreate () {
    document.body.className = 'dashboard'
  }
}
</script>

<style scoped>

</style>
