import { getDetailDataApi } from "../../utils/api";

const detailModule = {
  namespaced: true,
  state: () => ({
    // 详情页数据
    detailData: {},
  }),
  mutations: {
    // 详情页数据更改
    getDetail(state, payload) {
      state.detailDate = payload.result;
    },
  },
  actions: {
    // 请求详情数据
    async getDetailAsync({ commit }, payload) {
      const res = await getDetailDataApi({
        id: payload.id,
      });
      commit("getDetail", res);
    },
  },
};

export default detailModule;
