<template>
     
    <div class="wrap">
      <Myask v-if="show" @click="close"/>
      <div class="head">
        <Hea text="加班/休假"/>
        <Navv/>
      </div>

    <main>
      <Tap @addfn="addfn"/>
      <div class="min">
        <!-- {{list}} -->
        <Lister v-for="(item,index) in list" :key="index" :res="item"/>
      </div>
    <button @click="mask" class="task">+发起任务</button>
    </main>
    </div>
</template>
<script>
import Myask from "../components/mask"
import "../static/fonts/iconfont.css"
import Lister from "../components/list"
import request from "../utils/request"
export default {
  props:{

  },
  components:{
    Myask,
    Lister

  },
  data(){
    return {
        nav:[
            {title:"待处理",font:"icon-shizhong1"},
            {title:"已发起",font:"icon-zuobiao"},
            {title:"已处理",font:"icon-yibangding"}
        ],
        show:false,
        list:[],
        type:{
           page:1,
             pageSize:5,
             create_at:1,
             type:"overtime",
             statu:0
        }
    }
  },
  computed:{

  },
  methods:{
    addfn(val){

    },
    mask(){
      this.show = true
    },
    close(){
      this.show = false
    }
  },
  created(){
    this.$bus.$on("change",(i,data)=>{
      this.type.statu=i
      this.list = data.data
     
    })
    console.log(0)
     request.get('/api/task/list',{
             ...this.type,
                  
            }).then(res=>{
              //  console.log(res.data,"ssss")
                this.list = res.data.data
               
            })
        //  this.$bus.$on("chang",(type)=>{
        //     this.type.type = type
        //     console.log("sadasdsa",type)
             
        // })

  },
  mounted(){

  },
}
</script>
<style lang="scss">
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
}
header{
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 900;
  display: flex;
  justify-content:space-between;
  padding: 10px;
  // margin-bottom: 20px;
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
box-shadow: 5px 5px 10px #eee;
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

.router-link-exact-active{
  color: #0b6242
}


main{
  width: 100%;
  flex: 1;
  overflow: auto;
}
.task{
    width: 120px;
    height: 40px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background:#0b6242;
    color: #fff;
    outline: 0;
    border: 0;
    border-radius: 20px;
}
</style>
