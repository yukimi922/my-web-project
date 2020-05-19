import Vue from "vue"
import Router from "vue-router"
import home from "../views/home/home"

const routes = [
  {
    path: '/login',
    component: () => import("../views/home/login"),
    meta: {
      title: "登录"
    },
  },
  {
    path:'/',
    component: home,
    redirect: '/home',
    meta: {
      title: "首页"
    },
    children:[
      {
        path:'/home',
        component: () => import('../views/home/home')
      }
    ]
  }
]

Vue.use(Router);

// 导出路由信息
export default new Router({
    routes:routes
})

