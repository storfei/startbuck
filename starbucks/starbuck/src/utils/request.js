import axios from "axios"
import router from "../router";

const request = axios.create({
    baseURL:"http://localhost:3000",
    timeout:1000
})

// 请求之前拦截
request.interceptors.request.use((config)=>{

    // console.log(config)
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        }
    }
})

// 相应之后拦截
request.interceptors.response.use((response)=>{

    return response

},(error)=>{
    const response = error.response;
    const status = response.status;
    // console.log(error)
    if(status > 400){
        switch(status){
            
            case 401:
                console.log(router)
                router.push("/login")
            break;
            case 403:
                alert("没有权限")
            break;
            case 404:
                alert("页面走丢了")
            break;
        }
    }
    return Promise.reject(error)
})



export default request