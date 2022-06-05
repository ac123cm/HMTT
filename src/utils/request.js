import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'

// 创建axios请求对象
const request = axios.create({
  // 设置基地址
  baseURL: 'http://toutiao.itheima.net'
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做点什么
    // 不是所有接口的请求头都要携带token，例如登录接口
    if (!config.notToken) {
      config.headers.Authorization = `Bearer ${store.state.tokenObj.token}` // 请求头携带token
    }

    return config
  },
  error => {
    // 对请求错误做点什么
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  },
  error => {
    // 对响应错误做点什么
    /*
     * 401 token异常
     * 删除vuex的tokenObj，打回登录页
     */
    if (error.response.status === 401) {
      Toast.fail(error.response.data.message)
      store.commit('logout')
    }

    return Promise.reject(error)
  }
)

export default request
