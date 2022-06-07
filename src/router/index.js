import store from '@/store'
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
        component: () => import('@/views/Mine/Mine.vue'),
        meta: {
          isLogin: true
        }
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
      },
      {
        path: 'edit',
        name: 'edit',
        component: () => import('@/views/Mine/components/Edit.vue'),
        meta: {
          notTabbar: true
        }
      }
    ]
  },
  {
    path: '/article/:article_id',
    name: 'article',
    component: () => import('@/views/Article/Article.vue'),
    props: true
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

router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    if (store.state.tokenObj.token) {
      next()
    } else {
      router.push('/login?back=' + to.fullPath)
    }
  } else {
    next()
  }
})

export default router
