<template>
  <div class="logo">
    <!-- logo图标 -->
    <div>
      <h1><img src="../../assets/logo.png" alt="" /></h1>
    </div>
    <!-- 信息 -->
    <div class="info">
      <p>发现最新最热电影</p>
      <span>｜</span>
      <h3>打开App</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
// 引入自定义变量css样式
@import "../../assets/css/var.less";
.logo {
  height: 60px;
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 0 10px;
  // logo图标
  h1 {
    height: 100%;
    .center();
    img {
      width: 94px;
      height: 39px;
    }
  }
  // 信息
  .info {
    display: flex;
    .center();
    // 发现信息
    p {
      font-size: @xs-font;
      font-weight: 900;
      color: #666;
    }
    // 竖杠
    span {
      font-size: @s-font;
      color: rgba(0, 0, 0, 0.1);
    }
    // 打开app
    h3 {
      color: #b37e7e;
      padding-right: 10px;
      font-size: @m-font;
      background: url(../../assets/nav_arrow.png) no-repeat right center/10px
        10px;
    }
  }
}
</style>
