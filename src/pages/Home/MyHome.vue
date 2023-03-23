<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer/>
    <TodayRecommend/>
    <GoodsRank/>
    <ThinkLike/>
    <MyFloor/>
    <MyFloor/>
    <MyBrand/>
  </div>
</template>

<script>
// 引入其余组件
import ListContainer from './ListContainer.vue';
import TodayRecommend from './TodayRecommend.vue'
import GoodsRank from './GoodsRank.vue'
import ThinkLike from './ThinkLike.vue';
import MyFloor from './MyFloor.vue';
import MyBrand from './MyBrand.vue';
export default {
  components:{
    ListContainer,
    TodayRecommend,
    GoodsRank,
    ThinkLike,
    MyFloor,
    MyBrand

  }
}
</script>

<style>

</style>