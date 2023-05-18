import { v4 as uuidv4 } from 'uuid';
    let token = ""

    if(!localStorage.getItem("token")){
        
       token = localStorage.setItem("token",uuidv4() )
        }else{
        token = localStorage.getItem("token")
    }
    // console.log(token)

export default token

