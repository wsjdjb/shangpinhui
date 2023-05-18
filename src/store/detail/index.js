import {reqGetGoodDetail }from "@/api"


let state = {
    goodDetail:{},
}
let actions = {
    
    async getGoodDetail({commit},skuId){
        
        let result = await reqGetGoodDetail(skuId)
        // console.log(result.data)
        if(result.code){
            commit("GETGOODDETAIL",result.data)
        }
    }
}

let mutations  = {
    GETGOODDETAIL(state,goodDetail){
        
        state.goodDetail = goodDetail
    }
}
let getters = {
    categoryView(state){
        return state.goodDetail.categoryView || {}
    },
    skuInfo(state){
        return state.goodDetail.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodDetail.spuSaleAttrList || {}
    },
}
export default {
    state,
    actions,
    mutations,
    getters
}