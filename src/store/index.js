import { createStore } from 'vuex'
import { setToken, getToken } from '@/utils/auth'
import router from '@/router'

export default createStore({
  state: {
    tokenObj: getToken() || '' // 浏览器没有token就使用右边的初始值
  },
  getters: {},
  mutations: {
    setTokenObj (state, payload) {
      state.tokenObj = payload
      // vuex数据持久化
      // localStorage.setItem('token', JSON.stringify(payload)) // 手动设置
      setToken(payload)
    },
    // 登出
    logout (state) {
      state.tokenObj.token = ''
      router.push('/login?back=' + location.href.split('#')[1])
    }
  },
  actions: {},
  modules: {}
})
