import Vuex from "vuex"
import Vue from "vue"
import banner from "./banner"
import home from "./home"
import floor from "./floor"
import search from "./search"
import detail from "./detail"
import shopcar from "./shopcar"
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        home,
        banner,
        floor,
        search,
        detail,
        shopcar
    }
})
