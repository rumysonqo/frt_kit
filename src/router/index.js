import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio'
import Por_Programa from '../components/Por_Programa'
import Por_programa_meta from '../components/Por_programa_meta'
import Por_meta_tarea from '../components/Por_meta_tarea'
import Por_clasificador from '../components/Por_clasificador'
import Por_meta_clasificador from '../components/Por_meta_clasificador'

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
    path: '/por_programa_meta',
    name: 'por_programa_meta',
    component: Por_programa_meta
  },
  {
    path: '/por_meta_tarea',
    name: 'por_meta_tarea',
    component: Por_meta_tarea
  },
  {
    path: '/por_clasificador',
    name: 'por_clasificador',
    component: Por_clasificador
  },

  {
    path: '/por_meta_clasificador',
    name: 'por_meta_clasificador',
    component: Por_meta_clasificador
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
