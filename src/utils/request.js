import axios from 'axios'

// 创建axios请求对象
const request = axios.create({
  // 设置基地址
  baseURL: 'http://toutiao.itheima.net'
})

export default request
