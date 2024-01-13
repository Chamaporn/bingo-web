// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeVue.vue'),
      },
    ],
  },
    {
    path: '/',
    component: () => import('@/layouts/default/LayoutLogin.vue'),
    children: [

       {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "home" */ '@/views/LoginAdmin.vue'),
      },
    ],
  },
    {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [

       {
        path: 'folder',
        name: 'folder',
        component: () => import(/* webpackChunkName: "home" */ '@/views/FolderVue.vue'),
      },
    ],
  },
    {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [

       {
        path: 'file',
        name: 'file',
        component: () => import(/* webpackChunkName: "home" */ '@/views/FileVue.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
