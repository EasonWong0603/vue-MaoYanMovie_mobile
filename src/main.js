//引入vue
import Vue from "vue";
//引入根组件app
import App from "./App.vue";
//引入重置css样式
import "./assets/css/reset.less";
//引入自定义变量css样式
import "./assets/css/var.less";
// 引入图标字体
import "./assets/font/iconfont.css";
//设置根字体大小
import "amfe-flexible";

//生产环境不提示代码错误
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
