import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
// import Pending from "../views/pending.vue"
// import Send from "../views/send.vue"
// import Processed from "../views/processed .vue"
const Vacation = ()=>import("../views/vacation.vue")
const Overtime =()=>import("../views/overtime.vue")
const Login =()=>import("../views/login.vue")
const Detail =()=>import("../views/detail.vue")
const Con =()=>import("../views/con.vue")
const Commit =()=>import("../views/commit.vue")
const Search =()=>import("../views/search.vue")

Vue.use(Router)

const router =  new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      // redirect:"/pending",
      component: Home,
      meta:{
        title:"首页"
      },
      
    //   children:[
    //     {
    //       path: '/pending',
    //       name: 'Pending',
    //       component: Pending,
    //       redirect:"/pending/vacation",
    //       meta:{
    //         title:"待处理"
    //       },
         
    //       children:[
    //         {
    //           path: 'vacation',
    //           name: 'vacation',
    //           component: Vacation,
              
    //         },
    //         {
    //           path: 'overtime',
    //           name: 'overtime',
    //           component: Overtime
    //         }
    //       ]
    //     },
       
    //     {
    //       path: '/processed',
    //       name: 'Processed',
    //       meta:{
    //         title:"已处理"
    //       },
    //       component: Processed
    //     },
    //     {
    //       path: '/send',
    //       name: 'Send',
    //       meta:{
    //         title:"已发起"
    //       },
    //       component: Send
    //     },
        
    //   ]
    // },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail/:type/:id',
      name: 'Detail',
      meta:{
        title:"详情"
      },
      component: Detail
    },
    {
      path: '/vacation',
      name: 'vacation',
      component: Vacation,
      
    },
    {
      path: '/overtime',
      name: 'overtime',
      component: Overtime
    },
    {
      path: '/con/:type',
      name: 'con',
      component: Con
    },
    {
      path: '/commit',
      name: 'commit',
      component: Commit
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
   
  ]
  
})

router.beforeEach((to, from, next) => {
  
  document.title = to.meta.title
  next()
})



export default router
