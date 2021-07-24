<template>
  <footer>
    <ul>
      <!-- 注释部分为方法二，较为麻烦，但是种思路，将两处方法一注释，后打开其他注释即可运行，效果相同
      <li
        v-for="(item, index) in footermenu"
        :key="index"
        @click="change(item.url)"
        :class="{ active: active.startsWith(item.url) }"
      >
      <span class="iconfont" :class="item.icon"></span>
      <p>{{ item.title }}</p>
      </li> -->

      <!-- 底部菜单 -->
      <!-- 方法一 -->
      <router-link
        tag="li"
        v-for="item in footermenu"
        :key="item.url"
        :to="item.url"
      >
        <!-- 字体图标 -->
        <span class="iconfont" :class="item.icon"></span>
        <!-- 文本 -->
        <p>{{ item.title }}</p>
      </router-link>
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
          url: "/home/index",
        },
        {
          title: "视频",
          icon: "icon-shipin",
          url: "/home/video",
        },
        {
          title: "小视频",
          icon: "icon-shipin1",
          url: "/home/shortvideo",
        },
        {
          title: "演出",
          icon: "icon-piao",
          url: "/home/show",
        },
        {
          title: "我的",
          icon: "icon-wode",
          url: "/home/myuser",
        },
      ],
      //存储path信息，判断激活内容
      // active: sessionStorage.getItem("active")
      //   ? sessionStorage.getItem("active")
      //   : "/home/index",
    };
  },
  // watch: {
  //   //当页面改变时，监控地址栏的to.path信息，赋值给active，保持图标正确激活
  //   $route(to) {
  //     this.active = to.path;
  //   },
  // },
  // methods: {
  //   // 改变图标时，将改变的path信息，赋值给active和路由，保证路由页面切换和图标激活；存储当前path，保证刷新后仍能激活
  //   change(url) {
  //     this.active = url;
  //     this.$router.push(url);
  //     sessionStorage.setItem("active", url);
  //   },
  // },
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
  z-index: 99;
  ul {
    height: 100%;
    width: 100%;
    display: flex;
    // 图标和文本
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
    // 激活方法二
    // .active {
    //   color: @theme-color;
    // }

    // 激活方法一
    .router-link-active {
      color: @theme-color;
    }
  }
}
</style>
