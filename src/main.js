import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'swiper/css/swiper.css'

import '@/mock/mockServe'

import TypeNav from '@/components/TypeNav'

Vue.config.productionTip = false

Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
