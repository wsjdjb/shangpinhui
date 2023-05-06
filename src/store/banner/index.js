import { reqGetBannerList } from "@/api"

const state = {
    bannerList:[]
}
const actions = {
    async getBannerList({commit}){
        const result = await reqGetBannerList();
        if(result.code==200){
        commit("GETBANNERLIST",result.data)
        }
    }
}
const mutations = {
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
}
const getters ={

}
export default {
    state,
    actions,
    mutations,
    getters
}