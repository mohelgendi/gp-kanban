<template>
  <div>
    <div class="sidenav shadow-lg">
      <div class="sidebar-menu">
        <b-icon
          @click="toggleLowerSideBar('Boards')"
          class="sidebar-menu-elemnt"
          icon="kanban"
          font-scale="3"
        ></b-icon>
        <b-icon
          @click="toggleLowerSideBar('Groups')"
          class="sidebar-menu-elemnt"
          icon="people-fill"
          font-scale="3"
        ></b-icon>
        <b-icon
          @click="toggleLowerSideBar('Chats')"
          class="sidebar-menu-elemnt"
          icon="chat-fill"
          font-scale="3"
        ></b-icon>
        <b-icon
          @click="toggleLowerSideBar('Notifications')"
          class="sidebar-menu-elemnt"
          icon="bell-fill"
          font-scale="3"
        ></b-icon>
        <b-icon
          @click="toggleLowerSideBar('Settings')"
          class="sidebar-menu-elemnt"
          icon="gear-wide-connected"
          font-scale="3"
        ></b-icon>
      </div>
    </div>
    <div id="lower-sidenav" class="shadow-lg">
      <div class="lower-sidenav-container">
        <p class="menu-elemnt-header">{{menuElementHeader}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavBar',
  data () {
    return {
      lowerSideBar: 0,
      menuElementHeader: ''
    }
  },
  methods: {
    toggleLowerSideBar (header) {
      if (header !== this.menuElementHeader && this.lowerSideBar) {
        this.menuElementHeader = header
        return
      }
      this.menuElementHeader = header
      this.lowerSideBar = !this.lowerSideBar
      if (this.lowerSideBar) {
        document.getElementById('lower-sidenav').style.width = '260px'
        document.getElementsByClassName('dashboard')[0].style.marginLeft = '260px'
      } else {
        document.getElementById('lower-sidenav').style.width = '0px'
        document.getElementsByClassName('dashboard')[0].style.marginLeft = '70px'
      }
    }
  }
}
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 70px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #2682fe;
  overflow-x: hidden;
  padding-top: 20px;
  transition: 0.5s;
  display: table;
  position: absolute;
  text-align: center;
}

#lower-sidenav {
  height: 100%;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 0;
  border-right: #e4e4e4 solid 1px;
  background-color: #ffffff;
  overflow-x: hidden;
  padding-top: 20px;
  transition: 0.5s;
  text-align: center;
}
.sidebar-menu {
  display: table-cell;
  vertical-align: middle;
}
.sidebar-menu-elemnt {
  margin-bottom: 4rem;
  color: white;
  cursor: pointer;
}

.lower-sidenav-container {
  margin-left: 70px;
}
.menu-elemnt-header {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
