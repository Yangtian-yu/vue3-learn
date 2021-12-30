import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../layout/Dashboard.vue";
import Todos from "../components/todos/Todos.vue";
import NotFound from "../components/NotFound.vue";
import { h } from "vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];
//实例创建方式
const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savePositon) {
  //   if (savePositon) {
  //     return savePositon;
  //   } else {
  //     return { top: 0 };
  //   }
  // },
});

//使用命名导航至404页面
// router.resolve({
//   name: "not-found",
//   params: {
//     pathMatch: ["not", "found"],
//   },
// });
//特性：动态路由的增加
router.addRoute({
  path: "/about",
  name: "about",
  component: () => import("../views/about.vue"),
});
router.addRoute("about", {
  path: "/about/info",
  name: "info",
  component: {
    render() {
      return h("div", "info page");
    },
  },
});

//composition

export default router;
