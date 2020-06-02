<template>
  <div>
    <SideNavBar />
    <Board v-if="getCurrentBoard!==null" :board="getBoards[getCurrentBoard]"/>
    <center  style="margin-top:7%" v-if="getCurrentBoard===null">
      <span>
        <span style="font-size:5rem; opacity:0.07">
         Hi!, select a board to start...
      </span>
      <br>
      </span>
      <span style="font-size:130px; opacity:0.04">
        {{getDate}}
      </span>
    </center>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideNavBar from '../components/SideNavBar'
import Board from '../components/Board'
import helper from '../helpers/helper'
export default {
  name: 'Dashboard',
  components: { SideNavBar, Board },
  methods: {
  },
  computed: {
    ...mapGetters([
      'getBoards',
      'getCurrentBoard'
    ]),
    getDate () {
      return helper.getTime()
    }
  },
  beforeCreate () {
    document.body.style.marginLeft = '70px'
    document.body.className = 'dashboard'
  }
}
</script>

<style scoped>

</style>
