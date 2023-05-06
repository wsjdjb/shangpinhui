
import requests from "./requests";
import mockRequests from "./mockRequests"

export const reqGetCategoryList = ()=>requests({url:"/product/getBaseCategoryList",method:"get"})

export const  reqGetBannerList= ()=>mockRequests({url:"/banner",method:"get"})
export const  reqGetFloorList= ()=>mockRequests({url:"/floor",method:"get"})
//post有两种传递数据的方式-拼接url或者参数
// export const reqGetSearchList = (params)=>requests({url:"/list",method:"post",params})

export const reqGetSearchList = (data)=>requests({url:'/list',method:'post',data})