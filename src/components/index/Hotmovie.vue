<template>
  <main class="hotmovie">
    <Toprate />
    <Hotitem />
  </main>
</template>

<script>
// 引入最受好评组件
import Toprate from "@/components/index/hotmovie/Toprate.vue";
// 引入项目列表组件
import Hotitem from "@/components/index/hotmovie/Hotitem.vue";

export default {
  data() {
    return {};
  },

  components: {
    Toprate, //最受好评
    Hotitem, //项目列表
  },
};
</script>

<style lang="less" scoped>
// 引入自定义变量css样式
@import "../../assets/css/var.less";

main {
  .indexmaincommon();
}
</style>
