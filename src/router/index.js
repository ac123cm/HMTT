import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout/Layout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('@/views/Mine/Mine.vue')
      },
      {
        path: 'ask',
        name: 'ask',
        component: () => import('@/views/Ask/Ask.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/Video/Video.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
