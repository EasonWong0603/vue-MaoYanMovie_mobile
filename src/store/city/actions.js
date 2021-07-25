import { getAreaApi } from "../../utils/api";

const actions = {
  // 请求城市列表
  async getCityAsync({ commit }) {
    const res = await getAreaApi();
    commit("getCities", res);
  },
};

export default actions;
