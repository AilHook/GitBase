import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import MainFrame from '@/components/MainFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',//和router-link to相呼应，导航到/login
      name: 'Login',
      component: Login
    },
    {
      path: '/MainFrame',
      name: 'MainFrame',
      component: MainFrame
    }
  ]
})
