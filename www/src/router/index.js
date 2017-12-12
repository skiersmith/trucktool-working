import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/Dashboard'
import Category from 'components/Category'
import Login from 'components/Login'
import List from 'components/List'
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
      path: '/lists/:listId',
      props: true,
      name: 'List',
      component: List
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
