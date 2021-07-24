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
            meta: {
              requireAlive: true,
            },
          },
          // 影院页面
          {
            path: "/home/index/cinema",
            component: () => import("../components/index/Cinema.vue"),
            meta: {
              requireAlive: true,
            },
          },
          // 待映页面
          {
            path: "/home/index/wait",
            component: () => import("../components/index/Wait.vue"),
            meta: {
              requireAlive: false,
            },
          },
          // 经典电影页面
          {
            path: "/home/index/classic",
            component: () => import("../components/index/Classic.vue"),
            meta: {
              requireAlive: false,
            },
          },
        ],
      },
      // 视频页面
      {
        path: "/home/video",
        component: () => import("../views/home/Video.vue"),
        meta: {
          title: "猫眼视频 - 娱乐看猫眼",
        },
      },
      // 小视频页面
      {
        path: "/home/shortvideo",
        component: () => import("../views/home/Shortvideo.vue"),
        meta: {
          title: "猫眼小视频 - 娱乐看猫眼",
        },
      },
      // 表演页面
      {
        path: "/home/show",
        component: () => import("../views/home/Show.vue"),
        // 路由元信息，配合全局前置守卫
        meta: {
          requireLogin: true,
          title: "猫眼演出 - 娱乐看猫眼",
        },
      },
      // 我的页面
      {
        path: "/home/myuser",
        component: () => import("../views/home/Myuser.vue"),
        beforeEnter: (to, from, next) => {
          // 判断是否已经登陆
          if (localStorage.getItem("token")) {
            next();
          } else {
            next("/login"); // 未登录则跳转回登录界面
          }
        },
        meta: {
          title: "猫眼用户 - 娱乐看猫眼",
        },
      },
    ],
  },
  // 详情页面
  {
    path: "/detail/:id",
    component: () => import("../views/Detail.vue"),
    props: true, // 传参
  },
  // 城市选择页面
  {
    path: "/city",
    component: () => import("../views/City.vue"),
  },
  // 登录页面
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
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

// 重复点击footer报错解决
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

//全局前置守卫
router.beforeEach((to, from, next) => {
  // 判断页面是否需要登录状态
  if (to.meta.requireLogin) {
    // 判断是否已经登陆
    if (localStorage.getItem("token")) {
      next();
    } else {
      // 未登录则跳转回登录界面
      next("/login");
    }
  } else {
    // 不需要登录
    next();
  }
});

// 全局后置钩子
router.afterEach((to) => {
  // 设置页面title
  document.title = to.meta.title || "猫眼电影 - 娱乐看猫眼";
});
export default router;
