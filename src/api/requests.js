import axios from "axios"
import "nprogress/nprogress.css"
import nprogress from "nprogress"

const requests =  axios.create({
	baseURL:"/api",
	time:5000 //数值类型不是字符串

})



requests.interceptors.request.use((config)=>{
    nprogress.start()
	return config
})


requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(err)=>{
    alert(err.message);
    //终止Promise链
    return new Promise();
})



export default requests;
