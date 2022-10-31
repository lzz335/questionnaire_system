import axios from 'axios'
import {ElMessage} from "element-plus";

const service=axios.create({
    baseURL: "http://localhost:8085",
    timeout : 5000
})

service.interceptors.request.use(config=>{
    config.headers.Authorization = localStorage.getItem('token')
    return config
},error => {
    return Promise.reject(new Error(error))
})

service.interceptors.response.use((response)=>{
    console.log(response)
    const {data, meta}=response.data
    if(meta.status===200||meta.status===201){
        return data
    }else {
        ElMessage.error('账号或密码错误')
        return  Promise.reject(new Error(meta.msg))
    }
},error => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new  Error((error.response.data)))
})

export default service
