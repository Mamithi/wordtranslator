import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'Vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
