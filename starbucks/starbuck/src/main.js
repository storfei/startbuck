// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

import "./utils/js/flexible"
import plugins from "./plugins/base-ul"
import "./static/scss/common.scss"
Vue.config.productionTip = false

import {TimePicker} from 'element-ui'

Vue.use(TimePicker)
Vue.component("el-time-select",TimePicker)
// 挂载插件
Vue.use(plugins)
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
