import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias:'/home',
    //   redirect: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ],
  mode: 'history'
})
