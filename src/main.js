import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/common/utils.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.prototype.utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
