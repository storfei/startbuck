<template>
    <header>  
      <span class="iconfont icon-arrow-left"
      @click="$router.go(-1)"></span>
      <b>{{text}}</b>
      <p><b class="iconfont icon-riqixuanze"></b>
      <b class="iconfont icon-fangdajing" @click="sear"></b></p>
    </header>
</template>
<script>
export default {
    props:["text"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        sear(){
            this.$router.push("/search")
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>