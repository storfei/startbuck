<template>
    <div class="wrap">
        <div class="title">
            <p>X</p>
            <b>欢迎来到星享俱乐部</b>
        </div>
        
        <div class="min">
            <p><input type="text" 
            v-model="phone"
            value="phone"
            placeholder="手机号码"></p>
            <p><input type="text" 
            v-model="password"
            value="password"
            placeholder="验证码"></p>
            <button @click="login">登录/注册</button>

            <b>使用账号密码登录</b>
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
            phone:"",
            password:""
        }
    },
    computed:{

    },
    methods:{
        login(){
            request.post("/api/login",{
                phone:this.phone,
                password:this.password
            }).then(res=>{ //成功时
                
                this.$router.go(-1)
                window.localStorage.setItem("token",res.data.token)
                
            }).catch(res=>{  // 用来捕捉错误时
                console.log(res)
                alert(res.response.data.message)
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    background:#eee;
    .title{
        width: 100%;
        height: 90px;
        padding: 10px;
        background: #fff;
        box-shadow: 5px 5px 10px #ccc;
        p{
            font-size: 20px;
        }
        b{  
            font-size: 30px;
            font-weight: 900;
        }
    }
    .min{
        width: 100%;
        padding: 20px;
        flex: 1;
        // background: #eee;
        input{
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #ccc;
        }
        button{
            width: 100%;
            height: 40px;
            background: #999;
            border: 0;
            outline: 0;
            color: #fff;
            font-weight: 900;
            font-size: 16px;
            border-radius: 20px;
            margin-top: 30px;
        }
        b{
            width: 100%;
            height: 30px;
            display: block;
            text-align: center;
            color: green;
            margin-top: 50px;
        }
    }
}
</style>
