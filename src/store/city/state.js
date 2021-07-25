const state = () => ({
  cityName: sessionStorage.getItem("name") || "北京",
  cityId: sessionStorage.getItem("id") || 110100,
  // 城市列表
  cityList: [],
});

export default state;
