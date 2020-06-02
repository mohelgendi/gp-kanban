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
          v-if="false"
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
          @click="toggleLowerSideBar('Profile')"
          class="sidebar-menu-elemnt"
          icon="person-square"
          font-scale="3"
        ></b-icon>
      </div>
    </div>
    <div id="lower-sidenav" class="shadow-lg">
      <div class="lower-sidenav-container">
        <p class="menu-elemnt-header">{{menuElementHeader}}</p>
        <hr />
        <div v-show="menuElementHeader==='Boards'">
          <b-list-group>
            <b-list-group-item
              class="board-list-item"
              v-for="(board, i) in getBoards"
              :key="i"
              :variant="board.variant"
              @click="setCurrentBoard(i)"
            >
              {{board.title}}
              <b-icon
                class="board-settings-icon"
                v-b-modal="`modal-edit-${board.id}`"
                icon="gear-fill"
                font-scale="1"
              ></b-icon>

              <b-modal :id="`modal-edit-${board.id}`" title="Edit Board" ok-only>
                <b-form-group id="input-group-1" label="Board title" label-for="board-title">
                  <b-form-input
                    size="sm"
                    id="board-title"
                    v-model="board.title"
                    :value="board.title"
                    type="text"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Add participants"
                  label-for="add-participants"
                >
                  <b-row style="margin-bottom:5px;">
                    <b-col cols="10">
                      <b-form-input
                        size="sm"
                        id="add-participants"
                        v-model="participantId"
                        :value="participantId"
                        placeholder="Enter participants ID"
                        type="text"
                      ></b-form-input>
                    </b-col>
                    <b-col cols="2">
                      <b-button
                        @click="addParticipant(board, participantId)"
                        style="float:right;"
                        variant="outline-primary"
                        size="sm"
                      >Add</b-button>
                    </b-col>
                  </b-row>
                  <b-list-group-item
                    v-for="(participant ,i) in board.participants"
                    :key="i"
                    class="participants-list-item"
                  >
                    {{participant.name}}
                    <b-icon
                      @click="removeParticipant(i, board)"
                      class="participant-x"
                      icon="x"
                      font-scale="1.4"
                    ></b-icon>
                  </b-list-group-item>
                </b-form-group>
                <b-form-group id="input-group-3" label="Board Variant" label-for>
                  <b-button-group>
                    <b-button
                      v-for="(variant, i) in optionsVariant"
                      :key="i"
                      :variant="variant"
                      @click="setBoardVariant(board, variant)"
                      size="lg"
                    ></b-button>
                  </b-button-group>
                </b-form-group>
              </b-modal>
            </b-list-group-item>
          </b-list-group>
          <center style="margin-top:50px;opacity:0.35;" v-if="getBoards.length === 0">No Boards</center>
          <b-icon class="add-board-icon" icon="plus-circle" @click="addBoard()" font-scale="2.2"></b-icon>
        </div>

        <div v-show="menuElementHeader==='Chats'">
          <center style="margin-top:200px;opacity: 0.35">No Active Chats...</center>
        </div>

        <div v-show="menuElementHeader==='Notifications'">
          <center style="margin-top:200px;opacity: 0.35">No New Notifications...</center>
        </div>

        <div v-show="menuElementHeader==='Profile'">
          <div class="profile-container">
            <b-avatar :variant="getLoggedUser.variant" size="5.5rem"  :text="getLoggedUser.name[0]+getLoggedUser.name[1]"></b-avatar>
            <p style="font-size:25px;">{{getLoggedUser.name}}</p>
            <p style="font-size:15px; opacity:0.5;">ID: {{ getLoggedUser.id}}
              <b-icon class="profile-setting-icon" icon="gear" v-b-modal="`modal-profile-${getLoggedUser.id}`" font-scale="1.3"></b-icon>
            </p>
            <p style="font-size:15px; opacity:0.5;">{{getLoggedUser.email}}</p>
            <b-modal :id="`modal-profile-${getLoggedUser.id}`" title="Edit Profile">
                <b-form-group id="input-group-name" label="Name" label-for="user-name">
                  <b-form-input id="user-name" v-model="getLoggedUser.name" :value="getLoggedUser.name" type="text"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-email" label="E-mail" label-for="user-email">
                  <b-form-input id="user-email" v-model="getLoggedUser.email" :value="getLoggedUser.email" type="email"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-password" label="Change Password" label-for="user-password">
                  <b-form-input id="user-password" placeholder="Enter new password" type="password"></b-form-input>
                  <b-form-input id="user-confirm-password" placeholder="Re-enter your password" type="password"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-user-variant" label="User Variant" label-for>
                  <b-button-group>
                    <b-button
                      v-for="(variant, i) in optionsVariant"
                      :key="i"
                      :variant="variant"
                      @click="setUserVariant(getLoggedUser, variant)"
                      size="lg"
                    ></b-button>
                  </b-button-group>
                </b-form-group>
             </b-modal>
            <br>
            <p><b-icon icon="kanban" class="count-icons" font-scale="1.3"></b-icon>{{getBoards.length}} Boards</p>
            <p><b-icon icon="card-checklist" class="count-icons" font-scale="1.3"></b-icon>0 Cards</p>
            <br>
            <b-button size="sm" variant="outline-secondary" @click="signout()">Sign-out</b-button>&nbsp;&nbsp;
             <b-button size="sm" variant="outline-danger">Delete Account</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helper from '../helpers/helper'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SideNavBar',
  data () {
    return {
      lowerSideBar: 0,
      menuElementHeader: '',
      participantId: null,
      selectedVariant: null,
      optionsVariant: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      userName: '',
      userEmail: '',
      userPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions([
      'setCurrentBoard',
      'setLoggedUser',
      'setLoginStatus'
    ]),
    toggleLowerSideBar (header) {
      if (header !== this.menuElementHeader && this.lowerSideBar) {
        this.menuElementHeader = header
        return
      }
      this.menuElementHeader = header
      this.lowerSideBar = !this.lowerSideBar
      if (this.lowerSideBar) {
        document.getElementById('lower-sidenav').style.width = '300px'
        document.getElementsByClassName('dashboard')[0].style.marginLeft = '300px'
      } else {
        document.getElementById('lower-sidenav').style.width = '0px'
        document.getElementsByClassName('dashboard')[0].style.marginLeft = '70px'
      }
    },
    removeParticipant (i, board) {
      board.participants.splice(i, 1)
    },
    addParticipant (board, participantId) {
      if (participantId === '') return
      const selectedcParticipant = this.getUsers.filter(x => x.id === participantId)[0]
      const existedParticipant = board.participants.filter(x => x.id === participantId)[0]

      if (selectedcParticipant !== undefined && existedParticipant === undefined) { // member exists and added
        board.participants.push(selectedcParticipant)
      } else if (existedParticipant !== undefined) { // member already in board
        this.makeToast('danger', 'Member already in board...')
      } else if (selectedcParticipant === undefined) { // No such a user
        this.makeToast('danger', 'No such a user...')
      }
      this.participantId = ''
    },
    test () {
      alert('Eljoker Fo2!')
    },
    makeToast (variant = null, msg) {
      this.$bvToast.toast(msg, {
        title: 'Check ID again',
        variant: variant,
        toaster: 'b-toaster-top-center',
        autoHideDelay: 2500,
        solid: true
      })
    },
    setBoardVariant (board, variant) {
      board.variant = variant
    },
    addBoard () {
      const newBoard = {
        id: helper.generateShortID(),
        title: 'New Board',
        variant: 'primary',
        participants: [],
        lists: []
      }
      this.getBoards.push(newBoard)
    },
    setUserVariant (getLoggedUser, variant) {
      getLoggedUser.variant = variant
    },
    signout () {
      this.setLoginStatus(false)
      this.$router.replace('/')
      this.setLoggedUser({})
    }
  },
  computed: {
    ...mapGetters([
      'getBoards',
      'getCurrentBoard',
      'getUsers',
      'getLoggedUser'
    ])
  },
  beforeDestroy () {
    document.body.style.marginLeft = '0'
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
.board-list-item {
  cursor: pointer;
  text-align: left;
  padding: 8px;
}
.board-settings-icon {
  float: right;
  margin-top: 4px;
  z-index: 1;
}
.participants-list-item {
  padding: 2px 5px;
  text-align: left;
  width: 82%;
  font-size: 0.85rem;
}
.participant-x {
  float: right;
  margin-top: 2px;
  cursor: pointer;
}
.add-board-icon {
  opacity: 0.5;
  position: absolute;
  bottom: 20px;
  margin-left: -18px;
  cursor: pointer;
}
.profile-container {
  margin-top: 2.5rem;
}
.profile-setting-icon {
  margin-left:10px;
  cursor: pointer;
}
.count-icons {
  margin-right: 10px;
}
</style>
