import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入基本全局样式
import 'normalize.css'
import vant from '@/utils/vant'

createApp(App)
  .use(vant)
  .use(store)
  .use(router)
  .mount('#app')
