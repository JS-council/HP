import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import ProfileView from '@/views/ProfileView'
import CommitteeView from '@/views/CommitteeView'
import EventView from '@/views/EventView'
import ActivityView from '@/views/ActivityView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/committee',
    name: 'committee',
    component: CommitteeView
  },
  {
    path: '/event',
    name: 'event',
    component: EventView
  },
  {
    path: '/activity',
    name: 'activity',
    component: ActivityView
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
  routes
})

export default router
