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


//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    //res:实质就是项目中发请求、服务器返回的数据
    //进度条结束
    nprogress.done();
    return res.data;
}, (err) => {
    //温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
    alert(err.message);
    //终止Promise链
    return new Promise();
});



export default requests;
