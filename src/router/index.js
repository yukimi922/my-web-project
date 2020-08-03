import Vue from "vue"
import Router from "vue-router"

const routes = [
  {
    path:"/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("../views/home/login"),
    meta: {
      title: "登录"
    },
  },
  {
    path: "/home",
    component: () => import("../views/home/home"),
    meta: {
      title: "首页"
    }
  }
]

Vue.use(Router);

// 导出路由信息
export default new Router({
  mode: 'history',
  routes:routes
})

