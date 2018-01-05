import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/Dashboard'
import Category from 'components/Category'
import Login from 'components/Login'
import List from 'components/List'
import Overview from 'components/Overview'
import Product from 'components/Product'
import All from 'components/All'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }, {
      path: '/categorys/:categoryId',
      props: true,
      name: 'Category',
      component: Category
    },{
      path: '/categorys/:categoryId/lists/:listId',
      props: true,
      name: 'List',
      component: List
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/overview',
      name: 'Overview',
      component: Overview,
      props: true
    },{
      path: '/all',
      props: true,
      name: 'All',
      component: All
    }
    
  ]
})
