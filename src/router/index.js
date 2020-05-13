import Vue from 'vue'
import VueRouter from 'vue-router'
import Sandbox from '../views/sandbox/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'

Vue.use(VueRouter)

const routes = [
  { //TODO HOME作ったらHOMEに置き換え
    path: '/',
    name: 'TemporalGallery',
    component: Gallery
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: Sandbox
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/materials/box100',
    name: 'Box100',
    component: () => import(/* webpackChunkName: "materials_box100" */ '../views/materials/Box100.vue')
  },
  {
    path: '/materials/box100light',
    name: 'Box100Light',
    component: () => import(/* webpackChunkName: "materials_box100light" */ '../views/materials/Box100Light.vue')
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
    path: '/materials/mapjapan',
    name: 'MapJapan',
    component: () => import(/* webpackChunkName: "materials_mapjapan" */ '../views/materials/MapJapan.vue')
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
