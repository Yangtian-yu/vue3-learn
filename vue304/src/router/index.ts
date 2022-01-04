import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

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
      path: "/addTodo",
      component: () => import("../views/AddTodo.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   next();
// });

export default router;
