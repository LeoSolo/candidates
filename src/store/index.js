import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    App: {
      floatMenuOpened: false
    },
    Candidate: {
      subDirection: null
    }
  },
  plugins: [
    createPersistedState({
      paths: [],
      storage: window.localStorage
    })
  ],
  mutations: {
    setFloatMenuStatus (state, status) {
      state.App.floatMenuOpened = status
    },
    setSubDirection (state, subDirection) {
      state.Candidate.subDirection = subDirection
    },
  },
  modules: {
  }
})
