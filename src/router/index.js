import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/materials/box100',
    name: 'Box100',
    component: () => import(/* webpackChunkName: "materials_box100" */ '../views/materials/Box100.vue')
  },
  {
    path: '/materials/kanji7',
    name: 'Kanji7',
    component: () => import(/* webpackChunkName: "materials_kanji8" */ '../views/materials/Kanji7.vue')
  },
  {
    path: '/materials/kanji21',
    name: 'Kanji21',
    component: () => import(/* webpackChunkName: "materials_kanji21" */ '../views/materials/Kanji21.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
