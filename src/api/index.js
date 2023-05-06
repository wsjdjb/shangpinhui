
import requests from "./requests";
import mockRequests from "./mockRequests"

export const reqGetCategoryList = ()=>requests({url:"/product/getBaseCategoryList",method:"get"})

export const  reqGetBannerList= ()=>mockRequests({url:"/banner",method:"get"})
export const  reqGetFloorList= ()=>mockRequests({url:"/floor",method:"get"})