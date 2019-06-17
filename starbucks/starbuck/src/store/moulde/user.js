import request from "../../utils/request"
export default {
    namespaced: true,
    state:{
        userinfo:null
    },
    mutations: {
        setuser(state,data){
            // console.log(data)
            state.userinfo = data
        }
    },
    actions: {
        userFn(context){
            request.get("/api/user/info").then(res=>{
                // console.log(res)
                context.commit("setuser",res.data)
            })
        }
    
    }
}