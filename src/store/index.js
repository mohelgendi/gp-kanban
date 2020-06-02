import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [
      {
        id: 'wzb3m',
        title: 'Software Engineering',
        variant: 'primary',
        participants: [],
        lists: [
          {
            id: 'f2f9c76d-397a-4bcc-acfc-81db582368ee',
            title: 'To Do\n',
            color: '#212s55',
            cards: [
              {
                id: '200dcf36-145e-42d2-9601-a7d81aa06551',
                title: 'Report Intro\n',
                content: 'The introduction of the report has to summrized\n',
                tags: [],
                assignees: [],
                attachments: []
              }
            ]
          }
        ]
      },
      {
        id: '02g3d',
        title: 'Micro Electronics',
        variant: 'warning',
        participants: [],
        lists: [
          {
            id: '128a10a3-06b3-4b1f-a21e-5aaa9284db44',
            title: 'To Do\n',
            color: '#212s55',
            cards: []
          },
          {
            id: 'a3725042-d0a1-433f-a44d-d6069cac4f14',
            title: 'Doing',
            color: '#212s55',
            cards: []
          },
          {
            id: 'dced81f0-c544-41b8-9f1b-106021820431',
            title: 'Done',
            color: '#212s55',
            cards: []
          }
        ]
      },
      {
        id: 'kx60kb',
        title: 'Database Design',
        variant: 'success',
        participants: [],
        lists: [
          {
            id: 'afbf59d5-65d7-4dac-bb96-84ed8bfe93b4',
            title: 'First Phase\n',
            color: '#212s55',
            cards: [
              {
                id: '40a6b934-b19e-4dc7-a876-75cd31bd00d1',
                title: 'collecting data\n',
                content: 'collect data to be enterd into the DB\n',
                tags: [
                  {
                    title: 'Data',
                    variant: 'success'
                  },
                  {
                    title: 'deadline: 5 June',
                    variant: 'secondary'
                  }
                ],
                assignees: [],
                attachments: []
              },
              {
                id: '0eba2a36-5e18-4555-9739-81eba99912a8',
                title: 'prepare relations\n',
                content: 'Prepare the relations between the tables to be set\n',
                tags: [
                  {
                    title: 'relation',
                    variant: 'success'
                  },
                  {
                    title: 'entity',
                    variant: 'secondary'
                  }
                ],
                assignees: [],
                attachments: []
              }
            ]
          },
          {
            id: '3fe6ed88-58e0-4647-800c-88ab1c2aeca4',
            title: 'Second Phase\n',
            color: '#212s55',
            cards: [
              {
                id: '2283e1a7-1fb9-48c4-beb8-379c715ba6bf',
                title: 'SQL Script',
                content: 'extract teh data from the entities to the SQL script\n',
                tags: [
                  {
                    title: 'SQL',
                    variant: 'secondary'
                  },
                  {
                    title: 'Script',
                    variant: 'danger'
                  }
                ],
                assignees: [],
                attachments: []
              }
            ]
          },
          {
            id: '4965da3e-dfcf-451c-b431-ea9898efa1f2',
            title: 'Bugs\n',
            color: '#212s55',
            cards: [
              {
                id: '35f62484-390f-4ace-905f-5fec674eaca7',
                title: 'fix the relations\n',
                content: 'fix the associations between the entities and the attributes\n',
                tags: [
                  {
                    title: 'Attributes',
                    variant: 'primary'
                  }
                ],
                assignees: [],
                attachments: []
              }
            ]
          }
        ]
      },
      {
        id: 'jp31v9',
        title: 'Digital Electronics',
        variant: 'danger',
        participants: [
          {
            id: 'z5s4sew',
            name: 'Omar',
            handle: 'omoe',
            password: 'omar,123',
            variant: 'primary',
            image: '',
            email: 'omar123@gmail.com'
          },
          {
            id: '7qs54s5',
            name: 'Murat',
            handle: 'omoe',
            password: 'murat123',
            variant: 'danger',
            image: '',
            email: 'murat123@gmail.com'
          },
          {
            id: '5s54s5',
            name: 'Osman',
            handle: 'omoe',
            password: 'osman123',
            variant: 'primary',
            image: '',
            email: 'osman123@gmail.com'
          }
        ],
        lists: [
          {
            id: '55dc1f3c-b338-4c2e-9e64-a379f00d21a0',
            title: 'To Do\n',
            color: '#212s55',
            cards: [
              {
                id: '0c8e0727-8c83-4dfe-9f4a-fb1656d40268',
                title: 'Prepare questions\n',
                content: 'preparing questions for the midterm that will be sent to the taecher\n',
                tags: [
                  {
                    title: 'deadline: 5-May',
                    variant: 'secondary'
                  },
                  {
                    title: 'Important',
                    variant: 'success'
                  }
                ],
                assignees: [
                  {
                    id: 'z5s4sew',
                    name: 'Omar',
                    handle: 'omoe',
                    password: 'omar,123',
                    variant: 'primary',
                    image: '',
                    email: 'omar123@gmail.com'
                  },
                  {
                    id: '7qs54s5',
                    name: 'Murat',
                    handle: 'omoe',
                    password: 'murat123',
                    variant: 'danger',
                    image: '',
                    email: 'murat123@gmail.com'
                  }
                ],
                attachments: []
              },
              {
                id: '959c24a3-82d3-425c-bcf7-68ccedc8be2e',
                title: 'Solving problems\n',
                content: 'solve problems from the book and share the solutions with the rest of the team\n',
                tags: [
                  {
                    title: 'urgent',
                    variant: 'warning'
                  },
                  {
                    title: 'Monday',
                    variant: 'success'
                  }
                ],
                assignees: [
                  {
                    id: 'z5s4sew',
                    name: 'Omar',
                    handle: 'omoe',
                    password: 'omar,123',
                    variant: 'primary',
                    image: '',
                    email: 'omar123@gmail.com'
                  },
                  {
                    id: '7qs54s5',
                    name: 'Murat',
                    handle: 'omoe',
                    password: 'murat123',
                    variant: 'danger',
                    image: '',
                    email: 'murat123@gmail.com'
                  },
                  {
                    id: '5s54s5',
                    name: 'Osman',
                    handle: 'omoe',
                    password: 'osman123',
                    variant: 'primary',
                    image: '',
                    email: 'osman123@gmail.com'
                  }
                ],
                attachments: []
              },
              {
                id: 'f8a8e09b-dcfb-4b9b-8343-76766379b075',
                title: 'Finish the cover\n',
                content: 'formating the report cover\n',
                tags: [],
                assignees: [],
                attachments: []
              }
            ]
          },
          {
            id: '44634d25-9b66-4bdd-9162-e7f1565166fe',
            title: 'Doing',
            color: '#212s55',
            cards: [
              {
                id: '10fe1488-8375-4c0a-93bb-726e36b6ceb5',
                title: 'collect info.',
                content: 'collect information regarding the research.\n',
                tags: [
                  {
                    title: 'analysis',
                    variant: 'success'
                  },
                  {
                    title: 'research',
                    variant: 'success'
                  }
                ],
                assignees: [],
                attachments: []
              }
            ]
          },
          {
            id: '49561d94-81f3-4b9b-9fb8-ec26082713f8',
            title: 'Done',
            color: '#212s55',
            cards: [
              {
                id: '625d4bd0-6f1f-473c-b8b1-b8a36143b9b9',
                title: 'Chapter 1\n',
                content: 'reading and summerizing all the haedlines of chapeer 1\n',
                tags: [],
                assignees: [
                  {
                    id: '7qs54s5',
                    name: 'Murat',
                    handle: 'omoe',
                    password: 'murat123',
                    variant: 'danger',
                    image: '',
                    email: 'murat123@gmail.com'
                  },
                  {
                    id: '5s54s5',
                    name: 'Osman',
                    handle: 'omoe',
                    password: 'osman123',
                    variant: 'primary',
                    image: '',
                    email: 'osman123@gmail.com'
                  }
                ],
                attachments: []
              }
            ]
          }
        ]
      }
    ],
    users: [
      {
        id: '1s5a4s',
        name: 'Mohamed',
        handle: 'moelgendi',
        password: 'mohamed123',
        variant: 'warning',
        image: '',
        email: 'mohelgendi@hotmail.com'
      },
      {
        id: 'z5s4sew',
        name: 'Omar',
        handle: 'omoe',
        password: 'omar,123',
        variant: 'primary',
        image: '',
        email: 'omar123@gmail.com'
      },
      {
        id: '7qs54s5',
        name: 'Murat',
        handle: 'omoe',
        password: 'murat123',
        variant: 'danger',
        image: '',
        email: 'murat123@gmail.com'
      },
      {
        id: '5s54s5',
        name: 'Osman',
        handle: 'omoe',
        password: 'osman123',
        variant: 'primary',
        image: '',
        email: 'osman123@gmail.com'
      }
    ],
    notifications: [],
    loggedUser: {},
    currentBoard: null,
    loginStatus: false
  },
  getters: {
    getBoards (state) {
      return state.boards
    },
    getCurrentBoard (state) {
      return state.currentBoard
    },
    getUsers (state) {
      return state.users
    },
    getLoggedUser (state) {
      return state.loggedUser
    },
    getLoginStatus (state) {
      return state.loginStatus
    }
  },
  mutations: {
    SET_CURRENT_BOARD (state, i) {
      state.currentBoard = i
    },
    SET_LOGGED_USER (state, user) {
      state.loggedUser = user
    },
    SET_LOGIN_STATUS (state, status) {
      state.loginStatus = status
    }
  },
  actions: {
    setCurrentBoard (context, i) {
      context.commit('SET_CURRENT_BOARD', i)
    },
    setLoggedUser (context, user) {
      context.commit('SET_LOGGED_USER', user)
    },
    setLoginStatus (context, status) {
      context.commit('SET_LOGIN_STATUS', status)
    }
  },
  modules: {
  }
})
