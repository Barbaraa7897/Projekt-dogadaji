import Vue from 'vue'
import VueRouter from 'vue-router'
import pocetna from '../views/pocetna.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: pocetna
  },
  {
    path: '/dogadaji',
    name: 'dogadaji',
    component: () => import(/* webpackChunkName: "dogadaji" */ '../views/dogadaji.vue')
  },

  {
    path: '/detaljno/:igra',
    props: true,
    name: 'detaljno',
    component: () => import('../views/detaljno.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
