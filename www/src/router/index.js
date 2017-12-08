import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/Dashboard'
import Category from 'components/Category'
import Login from 'components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }, {
      path: '/categorys/:id',
      name: 'Category',
      component: Category
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
