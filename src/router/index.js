import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../Home.vue'
import About from '../About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      component: About
    }
  ]
})
