import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [
      {
        id: 'xcde2',
        title: 'Awesome Board',
        color: '#212s55',
        participants: [
          {
            id: 's5a4sew8',
            name: 'Mohamed',
            handle: 'moe',
            variant: 'warning',
            image: ''
          },
          {
            id: 's5s4sew8',
            name: 'Omar',
            handle: 'omoe',
            variant: 'primary',
            image: ''
          },
          {
            id: 's54s5ew8',
            name: 'Murat',
            handle: 'omoe',
            variant: 'danger',
            image: ''
          },
          {
            id: 's54s5ew8',
            name: 'Osman',
            handle: 'omoe',
            variant: 'primary',
            image: ''
          }
        ],
        lists: []
      }
    ]
  },
  getters: {
    getBoards (state) {
      return state.boards
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
