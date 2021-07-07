import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 一级重定向
  {
    path: "/",
    redirect: "/home",
  },
  // 主页
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      // 二级重定向
      {
        path: "/home",
        redirect: "/home/index",
      },
      // 电影/影院页面
      {
        path: "/home/index",
        component: () => import("../views/home/Index.vue"),
        children: [
          // 三级重定向
          {
            path: "/home/index",
            redirect: "/home/index/hotmovie",
          },
          // 热门电影页面
          {
            path: "/home/index/hotmovie",
            component: () => import("../components/index/Hotmovie.vue"),
          },
          // 影院页面
          {
            path: "/home/index/cinema",
            component: () => import("../components/index/Cinema.vue"),
          },
          // 待映页面
          {
            path: "/home/index/wait",
            component: () => import("../components/index/Wait.vue"),
          },
          // 经典电影页面
          {
            path: "/home/index/classic",
            component: () => import("../components/index/Classic.vue"),
          },
        ],
      },
      // 视频页面
      {
        path: "/home/video",
        component: () => import("../views/home/Video.vue"),
      },
      // 小视频页面
      {
        path: "/home/shortvideo",
        component: () => import("../views/home/Shortvideo.vue"),
      },
      // 表演页面
      {
        path: "/home/show",
        component: () => import("../views/home/Show.vue"),
      },
      // 我的页面
      {
        path: "/home/myuser",
        component: () => import("../views/home/Myuser.vue"),
      },
    ],
  },
  // 详情页面
  {
    path: "/detail/:id",
    component: () => import("../views/Detail.vue"),
    props: true,
  },
  // 城市选择页面
  {
    path: "/city",
    component: () => import("../views/City.vue"),
  },
  // 404页面
  {
    path: "*",
    component: () => import("../views/NotFound404.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
