// 管理整个项目的所有接口

import http from "./http";

// 最受好评接口
export const getToprateDateApi = (params) => http.get("/rated/list", params);

// 热点项目接口
export const getHotitemDateApi = (params) => http.get("/movies/list", params);

// 详情页接口
export const getDetailDataApi = (data) => http.post(data);
