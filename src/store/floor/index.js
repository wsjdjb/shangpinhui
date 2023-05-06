import { reqGetFloorList } from "@/api"

const state = {
    floorList:[]
}
const actions = {
    async getFloorList({commit}){
        const result = await reqGetFloorList();
        if(result.code==200){
        commit("GETFLOORLIST",result.data)

        }
    }
}
const mutations = {
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
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