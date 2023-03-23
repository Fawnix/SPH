import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// 三级联动组件--全局组件
import TypeNav from '@/pages/Home/TypeNav.vue'
// 第一个参数是全局组件的名字，第二个参数是哪个组件
Vue.component(TypeNav.name,TypeNav)

import router from '@/router'

// 挂载一个自定义属性$http
Vue.prototype.$http = axios
// 测试
// import {reqCategoryList} from '@/api';
// reqCategoryList();
new Vue({
  render: h => h(App),
  // 注册路由:底下的写法KV一只，省略V【router是小写的】
  router
}).$mount('#app')
