import Vue from 'vue'
import App from './App'
import router from './router'
import io from 'socket.io-client'
import store from './store'

require('../node_modules/bootstrap/less/bootstrap.less')

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})