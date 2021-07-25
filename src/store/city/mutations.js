const mutations = {
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
};

export default mutations;
