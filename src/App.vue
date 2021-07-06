<template>
  <div id="app">
    <!-- 首页 -->
    <Home />
    <!-- 视频页 -->
    <Video />
    <!-- 小视频页 -->
    <Shortvideo />
    <!-- 演出页 -->
    <Show />
    <!-- 我的用户页 -->
    <Myuser />

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script>
//引入首页
import Home from "./views/Home.vue";
//引入视频页
import Video from "./views/Video.vue";
//引入小视频页
import Shortvideo from "./views/Shortvideo.vue";
//引入演出页
import Show from "./views/Show.vue";
//引入我的用户页
import Myuser from "./views/Myuser.vue";

export default {
  components: {
    Home,
    Video,
    Shortvideo,
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
