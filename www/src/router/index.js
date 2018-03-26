import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register'
import Home from '../components/Home'
import Account from '../components/Account'
import Good from '../components/Good'
import Admin from '../components/Admin'
import Test from '../components/Test'
import Test2 from '../components/Test2'
import Intrastate from '../components/Intrastate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/good',
      name: 'Good',
      component: Good,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2,
    },
    {
      path: '/intrastate',
      name: 'Intrastate',
      component: Intrastate,
    },
    
    
  ]
})
