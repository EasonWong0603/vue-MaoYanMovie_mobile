<template>
  <div id="app">
    <!-- 首页 -->
    <Home />
    <!-- 视频页 -->
    <Vedio />
    <!-- 小视频页 -->
    <Littlevedio />
    <!-- 演出页 -->
    <Show />
    <!-- 我的用户页 -->
    <Myuser />
  </div>
</template>

<script>
//引入首页
import Home from "./views/Home.vue";
//引入视频页
import Vedio from "./views/Vedio.vue";
//引入小视频页
import Littlevedio from "./views/Littlevedio.vue";
//引入演出页
import Show from "./views/Show.vue";
//引入我的用户页
import Myuser from "./views/Myuser.vue";

export default {
  components: {
    Home,
    Vedio,
    Littlevedio,
    Show,
    Myuser,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
