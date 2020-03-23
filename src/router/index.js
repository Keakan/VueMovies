import Vue from 'vue'
import VueRouter from 'vue-router'
import Released from '../views/Released.vue'
import Upcoming from '../views/Upcoming.vue'
import Watchlist from '../views/Watchlist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Released',
    component: Released
  },
  {
  path: '/upcoming',
  name: 'Upcoming',
  component: Upcoming
  },{
  path: '/watchlist',
  name: 'Watchlist',
  component: Watchlist
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
