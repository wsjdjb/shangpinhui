
import requests from "./requests";
import mockRequests from "./mockRequests"

export const reqGetCategoryList = ()=>requests({url:"/product/getBaseCategoryList",method:"get"})

export const  reqGetBannerList= ()=>mockRequests({url:"/banner",method:"get"})
export const  reqGetFloorList= ()=>mockRequests({url:"/floor",method:"get"})
//post有两种传递数据的方式-拼接url或者参数
// 形参名不能乱写，必须依照接口规范--data:data简写为data

export const reqGetSearchList = (data)=>requests({url:'/list',method:'post',data})


export const reqGetGoodDetail = (skuId)=>requests({url:`/item/${skuId}`,method:'get'})


//加入购物车成功
export const reqShopCarCode = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})


//请求购物车数据
export const reqGetShopCarList = ()=>requests({url:`/cart/cartList`,method:'get'})


//购物车选中--/api/cart/checkCart/{skuID}/{isChecked}

export const reqChangeChecked = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})


//购物车删除--/api/cart/deleteCart/{skuId}

// export const reqDeleteCart = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'DELETE'})

export const reqDeleteCart = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});