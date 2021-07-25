import { getToprateDateApi } from "../../utils/api";

const toprateModule = {
  namespaced: true,
  state: () => ({
    // 高分电影列表
    rateList: [],
  }),
  mutations: {
    // 高分列表更改
    getToprate(state, payload) {
      state.rateList = payload.result;
    },
  },
  actions: {
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
};

export default toprateModule;
