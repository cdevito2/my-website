import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/components/AboutMe'
import Home from '@/components/Home' // this is the import line to add

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: AboutMe
      },
  ]
})