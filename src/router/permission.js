import router from "@/router/index";
import store from '@/store'

const whiteList=['/login']

router.beforeEach((to,from,next)=>{
    if(store.getters.token){
        next()
    }else {
        if(whiteList.includes(to.path)){
            next()
        }else {
            next('/login')
        }
    }
})
