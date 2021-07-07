<template>
  <footer>
    <ul>
      <!-- 底部菜单 -->
      <li v-for="(item, index) in footermenu" :key="index">
        <!-- 字体图标 -->
        <span class="iconfont" :class="item.icon"></span>
        <!-- 文本 -->
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      //底部菜单栏数据
      footermenu: [
        {
          title: "电影/影院",
          icon: "icon-dianying",
        },
        {
          title: "视频",
          icon: "icon-shipin",
        },
        {
          title: "小视频",
          icon: "icon-shipin1",
        },
        {
          title: "演出",
          icon: "icon-piao",
        },
        {
          title: "我的",
          icon: "icon-wode",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
// 引入自定义变量css样式
@import "../../assets/css/var.less";

footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 1px solid @border-color;
  position: fixed;
  bottom: 0;
  left: 0;
  ul {
    height: 100%;
    width: 100%;
    display: flex;
    li {
      flex: 1;
      font-size: @xxs-font;
      color: #696969;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      cursor: pointer;
      span {
        font-size: @xxl-font;
      }
    }
  }
}
</style>
