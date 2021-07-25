import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

// 城市模块
const cityModule = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default cityModule;
