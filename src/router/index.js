import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);
import Home from '@/pages/Home/MyHome.vue'
import Search from '@/pages/Search/MySearch.vue'
import Login from '@/pages/Login/MyLogin.vue'
import Register from '@/pages/Register/MyRegister.vue'

export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        }
        ,
        {
            name: 'search',
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true}
        }
        ,
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        }
        ,
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        }
        ,
        // 路由重定向：在项目跑起来的时候，访问/立马让他定向到首页
        {
            path:"/",
            redirect:'/home',
        }
    ]
})