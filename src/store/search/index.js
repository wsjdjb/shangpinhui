import { reqGetSearchList } from "@/api"
import Vue from "vue"
const state = {
    searchList:{}
}
const actions = {
    async getSearchList({commit},params={}){
        const result = await reqGetSearchList(params)

        if(result.code==200){
            commit("GETSEARCHLIST",result.data)
            // console.log(result.data)
            
        }
    }
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
        // Vue.set(state,'searchList',searchList)
    }
}
const getters ={
    attrsList(state){
        // console.log("重新获取attrsList了")
        return state.searchList.attrsList
        
        
    },
    goodsList(state){
        // console.log(state.searchList.goodsList)
        return state.searchList.goodsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
        
    },
    total(state){
        return state.searchList.total
    }

}
export default {
    state,
    actions,
    mutations,
    getters
}