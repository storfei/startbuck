<template>
    <div>
        <div class="tap">
           <p class="nav">
                <span v-for="(item,index) in tap" 
                :class="{'active':index == ind}" 
                @click="chang(index,item.type)"
                :key="index">{{item.title}}</span>
            </p>
            <p class="font" @click="$emit('addfn',123)">
                <span class="iconfont icon-zhuanhuan"></span>
                <span class="iconfont icon-gengduo-2"></span>
            </p>
        </div> 
    </div>
</template>
<script>

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            tap:[
                {
                    title:"加班",
                    type:"overtime"
                },
                { 
                    title:"休假",
                    type:"vacation"
                }
            ],
            ind:0,
            type:null
        }
    },
    computed:{

    },
    methods:{
        chang(index,type){
            this.ind = index;
            this.type = type
            console.log(index,this.ind,type)
            this.$bus.$emit("chang",type)
            // axios.get("/api/task/list",{
            //     params:{
            //         type :this.type,
            //         status: index
            //     }
            // })

        }
    },
    created(){
        // this.$bus.$on("change",(index)=>{
        //     console.log(index)
        //     axios.get("/api/task/list",{
        //         params:{
        //             type :this.type,
        //             status: index
        //         }
        //     }).then(res=>{
        //         console.log(res.data)
        //     })
        // })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.tap{
    width: 100%;
    height: 80px;
    display: flex;
    padding: 20px;
    .nav{
        width: 50%;
        height: 30px;
        margin-left: 25%;
        border: 1px solid green;
        border-radius: 10px;
        display:flex;
        span{
            display: inline-block;
            width: 50%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 10px;
            // color: green;
        }
    }
    .font{
        margin-left: 10%;
        margin-top: 2%;
        span{
            margin-left: 5px;
        }
    }
}

.active {
    background: green;
    color: #fff;
}
</style>