import Hea from "../components/header.vue"
import Navv from "../components/navv.vue"
import Tap from "../components/tap.vue"
import Alert from "../components/alert.vue"
export default {
    //install  自己接受一个Vue 实例
    install(Vue){
        // 全局组件插件
        Vue.component("Hea",Hea)
        Vue.component("Navv",Navv)
        Vue.component("Tap",Tap)
        // 挂载到vue 实例上面
        Vue.prototype.$alert = (title)=>{
            //用js 的方法 来调用插件
            let AlertClass =Vue.extend(Alert) 

            let AlertComponent = new AlertClass({
                propsData:{
                    title
                }
            })
            // 用mount 去手动创建 节点
            AlertComponent.$mount();
            // 必须添加到 body 里面
            document.body.appendChild(AlertComponent.$el)
        }
       
    }
}