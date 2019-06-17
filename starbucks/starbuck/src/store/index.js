import Vue from 'vue'
import Vuex from "vuex"
import list from "./moulde/list"
import user from "./moulde/user"

Vue.use(Vuex)
console.log(user)
const store = new Vuex.Store({
    modules: {
        list,
        user
    },
    state:{

    },
    getters: {
        
    },
    mutations: {
        
    },
    actions: {
        
    }

})
console.log(store)
export default store