import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Partnership from '../views/Partnership.vue'
import Products from '../views/Products.vue'
import Technologies from '../views/Technologies.vue'
import News from '../views/News.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contacts',
    component: Contacts
  }
  ,
  // { path: '/news',
  //   component: News
  // },
  // {
  //   path: '/partnership',
  //   component: Partnership
  // },
  {
    path: '/products',
    component: Products
  },
  // {
  //   path: '/technologies',
  //   component: Technologies
  // }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
