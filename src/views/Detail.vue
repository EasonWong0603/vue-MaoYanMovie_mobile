<template>
  <div>
    <Logo />
    <div class="detail" :style="{ background: detailData.backgroundColor }">
      <p class="title">猫眼电影 > {{ detailData.name }}</p>
      <img :src="detailData.img | formatimg" alt="" />
      <button @click="$router.push('/detail/1228788')">猜你喜欢</button>
    </div>
  </div>
</template>

<script>
// 引入Logo组件
import Logo from "../components/common/Logo.vue";
// 引入数据和动作
import { mapState, mapActions } from "vuex";

export default {
  // 上级传入
  props: ["id"],
  mounted() {
    // 通过发送id，请求详情数据
    this.getDetailAsync({
      id: this.id,
    });
  },
  computed: mapState({
    detailData: (state) => state.detail.detailData,
  }),
  methods: mapActions("detail", ["getDetailAsync"]),

  // 当路由更新时，发送新页面的id，重新请求数据
  async beforeRouteUpdate(to, from, next) {
    this.getDetailAsync({ id: to.params.id });
    next();
  },
  components: {
    Logo,
  },
  filters: {
    formatimg(val) {
      return val?.split("/w.h").join("100.138");
    },
  },
};
</script>

<style lang="less" scoped>
// 引入自定义变量css样式
@import "../assets/css/var.less";

#nprogress {
  .progress();
}
.detail {
  width: 100%;
  padding: 15px;
  .title {
    margin-bottom: 0.3rem;
    color: #ccc;
    font-size: 14px;
  }
}
</style>
