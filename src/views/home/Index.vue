<template>
  <div class="index">
    <div class="fixed">
      <!-- 头部组件 -->
      <Myheader :hasBack="false" :hasMenu="true">猫眼电影</Myheader>
      <Myheader :hasBack="true" :hasMenu="false" v-if="false">1921</Myheader>
      <!-- logo组件 -->
      <Logo />
      <!-- 导航组件 -->
      <Navigation />
    </div>
    <router-view />
  </div>
</template>

<script>
// 引入头部组件
import Myheader from "@/components/common/MYheader.vue";
// 引入logo组件
import Logo from "@/components/common/Logo.vue";
// 引入导航组件
import Navigation from "@/components/index/Navigation.vue";

export default {
  components: {
    Myheader,
    Logo,
    Navigation,
  },
};
</script>

<style lang="less" scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
