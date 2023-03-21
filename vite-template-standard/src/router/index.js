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
        path: 'product/:id',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'news',
        component: () => import('../views/NewsView.vue')
      },
      {
        path: 'deck/:name',
        component: () => import('../views/DeckView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue'),
        children: [
          {
            path: 'information',
            component: () => import('../views/InformationView.vue')
          },
          {
            path: 'checkOrder/:orderId',
            component: () => import('../views/CheckOrderView.vue')
          },
          {
            path: 'completeOrder',
            component: () => import('../views/CompleteOrderView.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/admin/AdminArticles.vue')
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
