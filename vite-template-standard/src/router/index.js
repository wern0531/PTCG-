import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'products/:category',
        name: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'news',
        component: () => import('../views/NewsView.vue')
      },
      {
        path: 'deck',
        component: () => import('../views/DeckView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
