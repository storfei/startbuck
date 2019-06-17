<template>
    <nav>
      <li v-for="(item,index) in nav" :key="index"
      @click="change(index)"
      >
      <span :class="`iconfont ${item.font}`"></span>
      <span>{{item.title}}</span>
      </li>
        
    </nav>
</template>
<script>
import request from '../utils/request';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            nav:[
                {title:"待处理",font:"icon-shizhong1"},
                {title:"已发起",font:"icon-zuobiao"},
                {title:"已处理",font:"icon-yibangding"}
            ],
            type:null,
            list:null,
            index:0
        }
    },
    computed:{

    },
    methods:{
        change(index){
            console.log(index)
            this.index=index
            request.get('/api/task/list',{
                params:{
                    type :this.type,
                    status: index
                }
            }).then(res=>{
                console.log(res.data)
                this.list = res.data
                this.$bus.$emit("change",index,res.data)
            })
        }
    },
    created(){
        this.$bus.$on("chang",(type)=>{
            this.type = type
            console.log(this.type,type)
             request.get('/api/task/list',{
                params:{
                    type :this.type,
                    status: this.index
                }
            }).then(res=>{
                console.log(res.data)
                this.list = res.data
                this.$bus.$emit("change",this.index,res.data)
            })
        })
       
      
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>