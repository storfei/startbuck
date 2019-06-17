<template>
    <div>
       
        <div class="button">
            <router-view></router-view>
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

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.top{
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
        a{
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

.router-link-exact-active {
    background: green;
    color: #fff;
}
</style>