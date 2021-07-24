<template>
  <nav>
    <!-- 地区 -->
    <span class="area" @click="gotoCity">{{ $store.state.cityName }}</span>
    <!-- 导航菜单 -->
    <ul>
      <router-link
        tag="li"
        v-for="item in navList"
        :key="item.url"
        :to="item.url"
      >
        {{ item.title }}
      </router-link>
    </ul>
    <!-- 搜索 -->
    <span class="iconfont icon-sousuo"></span>
  </nav>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {
      // 导航菜单数据
      navList: [
        {
          title: "热映",
          url: "/home/index/hotmovie",
        },
        {
          title: "影院",
          url: "/home/index/cinema",
        },
        {
          title: "待映",
          url: "/home/index/wait",
        },
        {
          title: "经典电影",
          url: "/home/index/classic",
        },
      ],
    };
  },
  // computed: mapState(["cityName"]),
  methods: {
    // 跳转到城市选择页面
    gotoCity() {
      this.$router.push("/city");
    },
  },
};
</script>

<style lang="less" scoped>
// 引入自定义变量css样式
@import "../../assets/css/var.less";

nav {
  width: 100%;
  height: 44px;
  background: white;
  color: @text-color;
  border-top: 1px solid @border-color;
  border-bottom: 1px solid @border-color;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 地区选择
  .area {
    width: 60px;
    font-size: @s-font;
    font-weight: 400;
    .center();
    // 右侧下拉箭头
    &::after {
      content: "";
      width: 0;
      height: 0;
      border: 4px solid transparent;
      border-top-color: #b0b0b0;
      display: inline-block;
      margin-left: 4px;
      margin-top: 2px;
    }
  }
  // 导航菜单
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 64px;
      height: 100%;
      font-size: @s-font;
      .center();
      position: relative;
    }
    // 激活添加css样式
    .router-link-active {
      font-size: @m-font;
      color: #333;
      // 下方红色线
      &::after {
        content: "";
        width: 20px;
        height: 3px;
        background: @theme-color;
        border-radius: 1.5px;
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  // 搜索
  .icon-sousuo {
    width: 40px;
    font-size: @xxl-font;
    color: @theme-color;
    .center();
  }
}
</style>
