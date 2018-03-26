// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import Notify from 'vue2-notify'

Vue.config.productionTip = false
Vue.use(VModal)
Vue.use(Notify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
