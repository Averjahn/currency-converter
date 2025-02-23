import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Convert from '@/views/Convert.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/convert',
    name: 'Convert',
    component: Convert
  }
]

const router = createRouter({
  history: createWebHistory('/converter'),
  routes
})

export default router