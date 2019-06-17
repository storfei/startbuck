<template>
    <div class="wrap">
       
        <Hea :text = "type== 'overtime'? '办公室加班申请表' : '办公室休假申请表'"/>
        <div class="top">
            <dl>
                <dt><img :src="detail.avatar"  alt=""></dt>
                <dd>
                    <p><span>申请人姓名</span>
                    <span>{{detail.nickname}}</span></p>
                    <p>直接主管</p>
                </dd>
            </dl>
           

        </div>
        <div class="min">

       
        <div class="message">
            <b>申请信息

                <span></span>
            </b>
            <p>加班日期
                <span>{{start}}</span>
            </p>
            <p>加班类型
                <span></span>
            </p>
            <p>加班起始时间
                <span>
                    <el-time-select/>
                </span>
            </p>
            <p>加班截止时间
                <span></span>
            </p>
            <p>共计时数
                <span></span>
            </p>
        </div>
        <div class="nating">
            <b>加班事由</b>
            <p><input type="text"></p>
        </div>
        <div class="file" >
            <!-- <input type="file" class="inp"> -->
            <span>+</span>
            <i>上传附件</i>
            <p  v-if="detail.annex">
                <img :src="'http://localhost:3000'+item" v-for="(item,index) in detail.annex" :key="index" alt="">
            </p>
            
        </div>
         </div>
         <div class="footerr">
            <button>审批历史</button>
            <button class="dele" @click="deletl">退出</button>
            <button 
            class="yes active">同意</button>
</div>
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
            detail:null,
            type:null,
        }
    },
    computed:{
        start(){
            console.log(this.detail.startTime)
            return new Date(this.detail.startTime).toLocaleDateString()
        }
    },
    methods:{
        deletl(){
            this.$alert("确定退出吗")
        }
    },
    created(){
        let {id,type} = this.$route.params
        console.log(id)
        this.type = type
        request.get("/api/apply/overtime",{
            params:{
                applicationNumber:id
            }
            
        }).then(res=>{
            console.log(res.data.data)
            this.detail = res.data.data
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.wrap{
    background: #eee;
    display:flex;
    flex-direction: column;
}
header{
    background:#0b6242;
    color: #fff;
}
.min{
    width: 100%;
    flex: 1;
    margin-top: -30px ;
    overflow: auto;
}

.top{
    width: 100%;
    height: 120px;
    background: #0b6242;
    margin-top: -20px;
    color: #fff;
    padding: 20px;
    border-bottom-left-radius: 23px;
    border-bottom-right-radius: 23px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
    dl{
        width: 100%;
        height: 100%;
        display: flex;
    }
    p{
        line-height: 30px;
    }
}
b{
    font-weight: 900;
}
.message{
    width: 90%;
    height: 250px;
    background: #fff;
    border-radius: 8px;
    margin: 0 auto;
    padding: 20px;
    
    p{
        line-height: 40px;
        border-bottom: 1px solid #eee;
    }

}
.nating{
    width: 90%;
    height: 100px;
    background: #fff;
    border-radius: 8px;
    margin: 20px auto;
    padding: 20px;

    p{
        line-height: 40px;
        border-bottom: 1px solid #eee;
    }
}

.file{
    width: 90%;
    height: auto;
    background: #fff;
    margin: 0 auto;
    padding: 20px;
    line-height: 20px;
   span{
       display: inline-block;
       width: 30px;
       height: 30px;
       border-radius: 50%;
       background: orange;
       color: #fff;
       line-height: 30px;
       text-align: center;
       margin-top: -20px;
       margin-right: 10px;
   }
   inp{
       width: 100%;
       height: 100%;

   }
img{
    width: 100px;
    height: 100px;
    margin-right: 20px;
}
}

.footerr{
    width: 100%;
    height: 40px;
    button{
        width: 20%;
        height: 40px;
        float: left;
        border: 0;
        outline: 0;
        background: #fff;
        color: green;
    }
    .dele{
        width: 40%;
        background: #666;
        color: #fff;
    }
    .yes{
        width: 40%;
        height: 40px;;

    }
    .active{
        background: #0b6242;
        color: #fff;
    }
}
</style>