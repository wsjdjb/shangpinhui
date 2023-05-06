import { reqGetCategoryList } from "@/api"
const state = {
    categoryList:[]
}
const actions = {
    async getCategoryList({commit}){
        const result = await reqGetCategoryList();
        if(result.code==200){
            
            commit("GETCATEGORYLIST",result.data)

        }
    }
}
const mutations = {
    GETCATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
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