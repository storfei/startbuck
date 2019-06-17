<template>
    <div class="head">

    
    <header>  
      <span class="iconfont icon-arrow-left"></span>
      <b>加班/休假</b>
      <p><b class="iconfont icon-riqixuanze"></b>
      <b class="iconfont icon-fangdajing"></b></p>
    </header>
    <nav>
      <router-link to="/pending" tag="li">
      <span class="iconfont icon-shizhong1"></span>
      <span>待处理</span>
      </router-link>
      <router-link to="/send" tag="li">
      <span class="iconfont icon-zuobiao"></span>
      <span>已发起</span>
      </router-link>
      <router-link to="/processed" tag="li">
      <span class="iconfont icon-yibangding"></span>
      <span>已处理</span>
      </router-link>
    </nav>

    <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import "../static/fonts/iconfont.css"
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
header{
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 900;
  display: flex;
  justify-content:space-between;
  padding: 10px;
  margin-bottom: 20px;
  p{
    span{
      margin-left: 10px;
    }
  }
}
.head{
  width: 100%;
  border-bottom: 1px solid #eee;
}
nav{
  width: 100%;
  height: 70px;
  display: flex;
   
  li{
    width: 33.3%;
    height: 70px;
    text-align: center;
    display: flex;
    flex-direction: column;
    span{
      margin-top: 10px;
    }
  }
}

.active{
  color: green
}
</style>
