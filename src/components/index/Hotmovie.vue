<template>
  <main class="hotmovie">
    <div>
      <Toprate />
      <Hotitem @finish="addbs" :num="num" @update="update" />
      <p v-if="finish">没有更多了</p>
    </div>
  </main>
</template>

<script>
// 引入最受好评组件
import Toprate from "@/components/index/hotmovie/Toprate.vue";
// 引入项目列表组件
import Hotitem from "@/components/index/hotmovie/Hotitem.vue";

// 引入better-scroll插件，用于优化滚动
import BetterScroll from "better-scroll";

let bs;
export default {
  data() {
    return {
      num: 1,
      finish: false,
    };
  },
  methods: {
    addbs() {
      bs = new BetterScroll(".hotmovie", {
        scrollX: false,
        scrollY: true,
        click: true,
        // 允许使用上拉加载
        pullUpLoad: true,
      });
      // 监听拉到底部
      bs.on("pullingUp", () => {
        this.num++;
      });
    },
    update(finish) {
      this.finish = finish;
      // 数据解构改变，再次加载
      bs.reflesh();
      // 本次请求完成，可以进行下一次
      if (!finish) {
        bs.finishPullUp();
      }
    },
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
