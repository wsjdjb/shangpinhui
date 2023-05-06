import Vuex from "vuex"
import Vue from "vue"
import banner from "./banner"
import home from "./home"
import floor from "./floor"
import search from "./search"
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        home,
        banner,
        floor,
        search
    }
})