import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean;
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/add",
      component: () => import("../views/AddTodos.vue"),
    },
  ],
});

export default router;
