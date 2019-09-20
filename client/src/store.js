import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import authModule from './modules/auth-module'
import boardModule from './modules/board-module'

Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    authModule,
    boardModule
  },
  state: {
    boards: [],
    activeBoard: {}
  },
  mutations: {
    setBoards(state, boards) {
      state.boards = boards
    },
    setResource(state, payload) {
      state[payload.resource] = payload.data
    }

  }
})
