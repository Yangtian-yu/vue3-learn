import { createRouter, createWebHashHistory, RouteRecord } from 'vue-router'

export interface Meta {
  // 名称
  title: string;
  // 是否忽略权限
  ignoreAuth?: boolean;
  permissions?: string[];
  // 是否不缓存
  noKeepAlive?: boolean;
  // 是否固定在tab上
  affix?: boolean;
  // tab上的图标
  icon?: string;
  // 跳转地址
  frameSrc?: string;
  // 外链跳转地址
  externalLink?: string;
  //隐藏
  hidden?: boolean;
}

export type AppRouteRecordRaw = RouteRecord & {
  hidden?: boolean;
  component: any;
  meta?: Meta;
  redirect?: any,
  children?: AppRouteRecordRaw[]
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      meta: {
        titile: "layout"
      },
      redirect: "/home",
      component: () => import("../Layout/index.vue"),
      // children: [
      //   {

      //     path: "/home",
      //     meta: {
      //       id: 1,
      //       title: "Home",
      //       icon: "home"
      //     },
      //     component: () => import('../views/Home.vue')
      //   },
      //   {
      //     path: "/about",
      //     meta: {
      //       id: 2,
      //       title: "About",
      //       icon: "about"
      //     },
      //     component: () => import('../views/About.vue')
      //   }
      // ]
    },
  ] as AppRouteRecordRaw[]
})

export default router
