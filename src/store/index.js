import { createStore } from 'vuex'

export default createStore({
  state: {
    tokenObj: ''
  },
  getters: {},
  mutations: {
    setTokenObj (state, payload) {
      state.tokenObj = payload
    }
  },
  actions: {},
  modules: {}
})
