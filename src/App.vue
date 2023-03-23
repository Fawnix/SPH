<template>
  <div>
    <Header  v-show="$route.meta.show"></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
  // 引入
  import Header from "./components/Header/MyHeader.vue"
  import Footer from "./components/Footer/MyFooter.vue"
export default {
  components:{
    Header,
    Footer
  },
  methods:{
     async name() {  //async  await  是解决异步的一种方案，必须要加，但是原生封装就不用
          const {data:res} = await this.$http.get('/tabbar')
          this.data = res
      }
  },
}
</script>

<style scoped>

</style>