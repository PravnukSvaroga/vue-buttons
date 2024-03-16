import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import EleventhPage from '../components/pages/EleventhPage.vue'
import {RouteNames} from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/eleventh-button',
    name: RouteNames.ELEVENTH_BUTTON,
    component: EleventhPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
