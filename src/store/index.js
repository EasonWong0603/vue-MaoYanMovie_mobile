import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 全局数据
  state: {},
  // 唯一能够改变state的地方，内部写同步函数
  mutation: {},
  // 异步函数
  actions: {},
  modules: {},
});

export default store;
