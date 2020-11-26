import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Temperature from '../views/Temperature.vue'
import Length from '../views/Length.vue'
import Time from '../views/Time.vue'
import Weight from '../views/Weight.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/temperature',
    name: 'Temperature',
    component: Temperature
  },
  {
    path: '/weight',
    name: 'Weight',
    component: Weight
  },{
    path: '/length',
    name: 'Length',
    component: Length
  },
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
