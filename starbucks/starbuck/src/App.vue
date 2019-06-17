<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import request from "./utils/request"
import {mapActions} from "vuex"
export default {
  // name: 'App'
  methods: {
    ...mapActions("user",["userFn"])
  },
  created(){
    this.userFn()
   
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  
}
html,body,#app{
    width: 100%;
    height: 100%;
}
.wrap{
  display: flex;
  flex-direction: column;
}
main{
  flex: 1;
}
</style>