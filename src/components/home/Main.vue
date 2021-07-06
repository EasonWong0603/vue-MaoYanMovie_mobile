<template>
  <main class="hotmovie">
    <Toprate />
    <Hotitem />
  </main>
</template>

<script>
// 引入热映部分
//    引入热映部分-最受好评组件
import Toprate from "@/components/home/Hotmovie-Toprate.vue";
//    引入热映部分-项目列表组件
import Hotitem from "@/components/home/Hotmovie-Hotitem.vue";

export default {
  data() {
    return {};
  },

  components: {
    Toprate, //热映部分-最受好评
    Hotitem, //热映部分-项目列表
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
// 引入自定义变量css样式
@import "../../assets/css/var.less";

main {
  position: fixed;
  top: 154px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
