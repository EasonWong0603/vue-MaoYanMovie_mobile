<template>
  <header>
    <!-- 返回左箭头 -->
    <span class="iconfont icon-ico_leftarrow" v-if="hasBack"></span>
    <!-- 居中内容 -->
    <slot></slot>
    <!-- 居右菜单 -->
    <span class="iconfont icon-daohang" v-if="hasMenu"></span>
  </header>
</template>

<script>
export default {
  props: {
    hasBack: Boolean, //是否有返回左箭头
    hasMenu: Boolean, //是否有右侧菜单
  },
};
</script>

<style lang="less" scoped>
// 引入自定义变量css样式
@import "../../assets/css/var.less";

header {
  width: 100%;
  height: 50px;
  background: @theme-color;
  .center(); //上下左右居中
  color: white;
  font-size: @l-font;
  position: relative;
  span {
    font-size: @xxl-font;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .icon-daohang {
    right: 8px;
    font-weight: 900;
  }
  .icon-ico_leftarrow {
    left: 8px;
  }
}
</style>
