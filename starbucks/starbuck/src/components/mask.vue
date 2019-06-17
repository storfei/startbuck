<template>
    <div class="mask-box" >

        <div class="foot">
            <span></span>
            <li>
                <span class="iconfont icon-tongjitu111"></span>
                <router-link to="/con/overtime">加班</router-link>
            </li>
            <li>
                <span class="iconfont icon-tian"></span>
                <router-link to="/con/vacation">休假</router-link>
            </li>
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
<style lang="scss">
.mask-box{
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
}
.foot{
    width: 100%;
    height: 150px;
    background: #fff;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    li{
        width: 50%;
        height: 150px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span{
            margin-top: 10px;
        }
    }

}
</style>