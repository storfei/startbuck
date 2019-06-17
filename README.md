# startbuck

> 这是一个关于星巴克员工上班打卡的项目，在这里和大家分享一下

# 星巴克

> vue2.0、vuex、vue-router、axios、webpack、
element-ui

### Vuex

vue提供了一个数据管理工具vuex，有点类似于angular中factory和service，可以进行数据上的通信。
比如存储一些公共变量或者是不同组件间的数据处理等。

这个有一些高级用法在这里不细说，想要了解的可以去官方文档看，有中文版本。

```javascript
const store = new Vuex.Store({
 state:{
        userinfo:null
    },
    mutations: {
        setuser(state,data){
            state.userinfo = data
        }
    },
    actions: {
        userFn(context){
            request.get("/api/user/info").then(res=>{
                context.commit("setuser",res.data)
            })
        }
    
    }
})
```

### Vue-Router

vue-router是vue的路由系统，可以用来创建单页应用。基本思想是在主页面中引入<router-view>标签，然后定义路由，把router挂在到app上，然后把各个子页面渲染到view里面。使用起来还是很方便的，
跳转页面只需要

```javascript
router.push('test')
```


### 组件间的通信

一。如果是和子组件通信，则使用ref就可以实现，如：

```html
<test ref="testHook"></test>
...js code
this.$ref.testHook.add() //调用test子组件的add方法
```

二。使用emit来发送广播

vue2提供了一套广播机制，即一边发送广播，一边接收广播来执行相应操作。使用方法如下：

比如想要给test组件发送一个“相加”广播:

```javascript
export default {
  method:{
  	click(){
  	  Vue.$emit('add',{}) //第二个参数可作为传递数据传送到监听端口，不需要则传空对象
  	}
  }
}
```

那么test组件中就需要监听，在created方法里写

```javascript
export default {
  created(){
   Vue.$on('add',this.add)
  },
  method:{
  	add(){
  	  this.count++
  	}
  }
}
```


除了以上总结的这点小的知识点以外，还有很多vue的知识想要和大家分享，以后会陆续写出来，大家感兴趣的也可以来我的GitHub一起来写这个项目（觉得不错的给个star Hah）

## 安装步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 项目截图


## 交流

欢迎热爱学习、忠于分享的胖友一起来交流

- QQ：1422636961


- WeChat

## 声明

本项目的设计资源来自纯属练手，如有冒犯，还请海涵。
