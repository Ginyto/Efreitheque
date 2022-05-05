import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },

  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/CatalogView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
