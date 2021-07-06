<template>
  <div class="home">
    <!-- 头部组件 -->
    <Myheader :hasBack="false" :hasMenu="true">猫眼电影</Myheader>
    <!-- <Myheader :hasBack="true" :hasMenu="false">1921</Myheader> -->

    <!-- logo组件 -->
    <Logo />
    <!-- 导航组件 -->
    <Navigation />
    <!-- 主体部分组件 -->
    <Main />
    <!-- 尾部组件 -->
    <Myfooter />
  </div>
</template>

<script>
// 引入头部组件
import Myheader from "@/components/public/MYheader.vue";
// 引入logo组件
import Logo from "@/components/public/Logo.vue";
// 引入头部组件
import Navigation from "@/components/home/Navigation.vue";
// 引入头部组件
import Main from "@/components/home/Main.vue";
// 引入尾部组件
import Myfooter from "@/components/public/MYfooter.vue";

export default {
  components: {
    Myheader,
    Myfooter,
    Logo,
    Navigation,
    Main,
  },
};
</script>

<style lang="less" scoped></style>
