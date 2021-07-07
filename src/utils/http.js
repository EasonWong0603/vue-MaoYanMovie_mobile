// 请求数据
const http = {
  get(url) {
    return new Promise((reslove) => {
      return fetch("http://www.pudge.wang:3080/api" + url)
        .then((response) => response.json())
        .then((res) => {
          if (res.status === 0) {
            reslove(res);
          }
        });
    });
  },
  post() {},
};

export default http;
