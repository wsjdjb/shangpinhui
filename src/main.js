import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store  from './store'


Vue.config.productionTip = false


import TypeNav from "@/components/TypeNav"
import Swiper from "@/components/Swiper"
import { Pagination,Tag } from 'element-ui';


Vue.component(TypeNav.name,TypeNav)
Vue.component(Swiper.name,Swiper)



Vue.component(Pagination.name, Pagination);
Vue.component(Tag.name, Tag);

import "@/mock/index.js"
import 'swiper/css/swiper.min.css';
new Vue({
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
