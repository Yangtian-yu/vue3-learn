import { createWebHashHistory, RouteRecordRaw } from "vue-router";
import { createRouter } from "vue-router";

export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean;
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
      meta: {
        title: "待办列表",
        icon: "el-icon-document",
      },
    },
    {
      path: "/add",
      hidden: true,
      component: () => import("../views/AddTodo.vue"),
    },
  ] as RouteRecordRaw[],
});

// router.beforeEach((to, from, next) => {

// });

export default router;
