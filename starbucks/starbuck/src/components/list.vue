<template>
    
        <dl @click="detail(res.list_type,res.applicationNumber)">
           
            <dt>
                <span></span>
                <p><span>{{res.applicationNumber}}</span></p>
                <p><span>申请人</span>  {{res.nickname}}</p>
                <p><span>加班日期</span>  2019-02-03</p>
            </dt>
            <dd>
                <p class="type"><span>待审批</span></p>
                <p><span>加班类型</span>  工作日加班</p>
                <p><span>加班时间</span>    2.3</p>
            </dd>
        </dl>
  
</template>
<script>
export default {
    props:["res"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        detail(type,id){
            this.$router.push("/detail/"+type+"/"+id)
            console.log(type,id)
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
dl{
    width: 100%;
    height: 100px;
    padding: 10px;
    display: flex;
    border-bottom: 5px solid #eee;
    p{
        line-height: 25px;
        span{
            color: #999;
            margin-right: 20px;
        }
    }
    dt{
        
        width: 60%;
        
    }
    .type{
        text-align: right;
    }
}
</style>