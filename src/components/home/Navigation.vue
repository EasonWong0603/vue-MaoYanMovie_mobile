<template>
  <nav>
    <!-- 地区 -->
    <span class="area">杭州</span>
    <!-- 导航菜单 -->
    <ul>
      <li
        v-for="(item, index) in navList"
        :key="item"
        :class="{ active: activeNum === index }"
        @click="change(index)"
      >
        {{ item }}
      </li>
    </ul>
    <!-- 搜索 -->
    <span class="iconfont icon-sousuo"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: ["热映", "影院", "待映", "经典电影"], // 导航菜单数据
      activeNum: 0, // 导航菜单点击激活
    };
  },
  methods: {
    // 导航菜单点击激活事件
    change(index) {
      this.activeNum = index;
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
    // 点击事件添加css样式
    .active {
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
