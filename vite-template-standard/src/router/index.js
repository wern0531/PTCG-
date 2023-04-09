import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'products/:category',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'news/:pathNatch(.*)*',
        redirect: '/home',
        component: () => import('../views/front/NewsView.vue')
      },
      {
        path: 'deck/:name',
        component: () => import('../views/front/DeckView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue'),
        children: [
          {
            path: 'information',
            component: () => import('../views/front/InformationView.vue')
          },
          {
            path: 'checkOrder/:orderId',
            component: () => import('../views/front/CheckOrderView.vue')
          },
          {
            path: 'completeOrder',
            component: () => import('../views/front/CompleteOrderView.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    redirect: '/admin/products',
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
  },
  {
    path: '/login',
    component: () => import('../views/front/LoginView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
