import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean;
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/add",
      component: () => import("../views/AddTodo.vue"),
    },
  ],
});

router.beforeEach((to, form, next) => {
  next();
});

export default router;
