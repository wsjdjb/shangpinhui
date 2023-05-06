import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store  from './store'
Vue.config.productionTip = false
import TypeNav from "@/components/TypeNav"
import Swiper from "@/components/Swiper"
Vue.component(TypeNav.name,TypeNav)
Vue.component(Swiper.name,Swiper)
import "@/mock/index.js"
import 'swiper/css/swiper.min.css';
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
