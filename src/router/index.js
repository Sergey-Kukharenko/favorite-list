import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import History from '../views/History'
import Detail from '../views/Detail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/history/:id',
    props: true,
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
