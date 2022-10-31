import {login as LoginApi} from "@/api/login";
import router from "@/router";

export default {
    namespaced: true,
    state:()=>({
        token: localStorage.getItem('token')||''
    }),
    mutations:{
        setToken(state,token){
            state.token=token
            router.replace('/')
            localStorage.setItem('token',token)
        }
    },
    actions:{
        login({commit}, userInfo){
            return new Promise((resolve,reject)=>{
                LoginApi(userInfo).then(res=>{
                    commit('setToken',res.token)
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    }
}
