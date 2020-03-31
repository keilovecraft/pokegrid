import App from './App/index.vue'
import router from './router.js'
import Vue from 'vue'
import store from '@/store'

Vue.config.productionTip = false

Vue.filter('formatText', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1).replace('-', ' ')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
