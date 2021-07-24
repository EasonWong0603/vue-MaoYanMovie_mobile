import NProgress from "nprogress";
// 路径前缀
const BASE_URL = "http://www.pudge.wang:3080/api";
// 请求数据
const http = {
  get(url, params) {
    //params传入对象，拼接到地址栏url中
    if (params) {
      let arr = [];
      for (const key in params) {
        arr.push(key + "=" + params[key]); //遍历产生键值对数组
      }
      url += "?" + arr.join("&"); //拼接成url?k1=v1&k2=v2形式
    }
    return new Promise((reslove) => {
      return fetch(BASE_URL + url)
        .then((response) => response.json())
        .then((res) => {
          if (res.status === 0) {
            reslove(res);
          }
        });
    });
  },
  post(url, data) {
    NProgress.start();
    return new Promise((reslove) => {
      return fetch(BASE_URL + url, {
        body: JSON.stringify(data),
        header: { "content-type": "application/json" },
        method: "POST",
      })
        .then((response) => response.json())
        .then((res) => {
          NProgress.done();
          if (res.status === 0) {
            reslove(res);
          }
        });
    });
  },
};

export default http;
