import {reqShopCarCode,reqGetShopCarList,reqChangeChecked,reqDeleteCart} from  "@/api"
import token from "@/utils/uuid"
let state = {
    token,
    shopCarList:[]
}
let actions = {
    async addShopCar({commit},{skuId,skuNum}){
        let result = await reqShopCarCode(skuId,skuNum);
        if(result.code == 200){
            return "ok"
        }else{
            return   Promise.reject(new Error("faile"))
        }
    },
    async getShopCarList({commit}){
        let result = await reqGetShopCarList()
        if(result.code==200){
            commit("GETSHOPCARLIST",result.data)
            // console.log(result.data)
        }
    },
    async changeChecked({commit},{skuId,isChecked}){
        let result = await reqChangeChecked(skuId,isChecked)
        if(result.code == 200){
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    // async deleteCart({commit},skuId){
    //     let result = await reqDeleteCart(skuId)
    //     if(result.code == 200){
    //         return "ok"
    //     }else{
    //         return Promise.reject(new Error("faile"))
    //     }
    // },
    async deleteCartById({ commit, state, dispatch }, skuId) {
        let result = await reqDeleteCart(skuId);
        if (result.code == 200) {
             return 'ok';
        } else {
             return Promise.reject();
        }
   },
   async deleteAllCarts({ commit, state, dispatch }){
    let arr = [];
    console.log(state.shopCarList[0].cartInfoList)
    state.shopCarList[0].cartInfoList.forEach(item => {
        if(item.isChecked==1){
            let result = dispatch("deleteCartById",item.skuId)
            arr.push(result)
        }
    });
    return Promise.all(arr)
   },
   allUpdateChecked({ commit, state, dispatch }, isChecked) {
    let arr = [];
    //获取购物车商品的个数,进行遍历
    state.shopCarList[0].cartInfoList.forEach(item => {
         //调用修改某一个商品的action【四次】
         let skuId = item.skuId
         let ps = dispatch("changeChecked", {skuId, isChecked} );
         arr.push(ps);
    })
    //Promise.all():参数需要的是一个数组【数组里面需要promise】
    //Promise.all()执行一次,返回的是一个Promise对象,Promise对象状态：成功、失败取决于什么?
    //成功、还是失败取决于数组里面的promise状态:四个都成功、返回成功Promise、只要有一个失败、返回Promise失败状态！！！
    return Promise.all(arr);
},

}
let mutations = {
    GETSHOPCARLIST(state,shopCarList){
        // console.log(1)
        
        state.shopCarList = shopCarList
    }
}
let getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}