import { createRouter, createWebHistory } from 'vue-router'
import Body from '../components/Body.vue'

const routes = [
  {
    path: '/',
    name: 'Body',
    component: Body
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
