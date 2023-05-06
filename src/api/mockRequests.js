import axios from "axios"
const requests =  axios.create({
	baseURL:"/mock",
	time:5000 //数值类型不是字符串

})

requests.interceptors.request.use((config)=>{

	return config
})


requests.interceptors.response.use((res)=>{
	return res.data
},(err)=>{    
	alert(err.message);
    //终止Promise链
    return new Promise();

})

export default requests;