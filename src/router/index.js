import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio'
import Por_Programa from '../components/Por_Programa'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Inicio
  },
  {
    path: '/por_programa',
    name: 'por_programa',
    component: Por_Programa
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
