import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/common/utils.js'
import '@/assets/styles/reset.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

Vue.prototype.utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
