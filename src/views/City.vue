<template>
  <div>
    <van-index-bar>
      <div v-for="item in cityList" :key="item.prefix">
        <van-index-anchor :index="item.prefix.toUpperCase()" />
        <van-cell
          :title="city.name"
          v-for="city in item.cities"
          :key="city.cityId"
          @click="clickCity(city)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.getCityAsync();
  },
  // 引入城市列表
  computed: mapState(["cityList"]),

  methods: {
    // 请求城市数据
    ...mapActions(["getCityAsync"]),
    // 点击城市，改变城市和城市id，并返回主页
    clickCity(value) {
      this.$store.commit("changeCity", {
        name: value.name,
        id: value.cityId,
      });
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less">
// 引入自定义变量css样式
@import "../assets/css/var.less";

.van-index-bar > :nth-child(2) {
  padding-bottom: 200px;
  background: #eee;
  .van-cell {
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    .textof();
  }
}
</style>
