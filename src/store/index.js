import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { getAreaApi, getDetailDataApi, getToprateDateApi } from "../utils/api";

const store = new Vuex.Store({
  // 全局数据
  state: {
    // 城市
    cityName: sessionStorage.getItem("name") || "北京",
    cityId: sessionStorage.getItem("id") || 110100,
    // 城市列表
    cityList: [],

    // 详情页数据
    detailData: {},

    // 高分电影列表
    rateList: [],
  },
  // 唯一能够改变state的地方，内部写同步函数
  mutations: {
    changeCity(state, payload) {
      state.cityName = payload.name;
      state.cityId = payload.id;
      sessionStorage.setItem("name", payload.name);
      sessionStorage.setItem("id", payload.id);
    },
    // 城市列表更改
    getCities(state, payload) {
      state.cityList = payload.result;
    },
    // 详情页数据更改
    getDetail(state, payload) {
      state.detailDate = payload.result;
    },
    // 高分列表更改
    getToprate(state, payload) {
      state.rateList = payload.result;
    },
  },
  // 异步函数
  actions: {
    // 请求城市列表
    async getCityAsync({ commit }) {
      const res = await getAreaApi();
      commit("getCities", res);
    },
    // 请求详情数据
    async getDetailAsync({ commit }, payload) {
      const res = await getDetailDataApi({
        id: payload.id,
      });
      commit("getDetail", res);
    },
    // 请求高分数据
    getToprateAsync({ commit }) {
      return new Promise((reslove) => {
        getToprateDateApi().then((res) => {
          commit("getToprate", res);
          reslove();
        });
      });
    },
  },
  modules: {},
});

export default store;
