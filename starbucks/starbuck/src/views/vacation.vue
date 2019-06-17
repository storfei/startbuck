<template>
    <div>
        <Mask/>
       <List v-for="(item,index) in lists" :key="index" :item="item"/>
       
    </div>
</template>
<script>
import request from "../utils/request"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            lists:null
        }
    },
    computed:{

    },
    methods:{
        
    },
    created(){
        // request.get("/api/task/list").then(res=>{
        //     this.lists = res.data.data;
        //     // console.log(this.lists)
        // })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

</style>