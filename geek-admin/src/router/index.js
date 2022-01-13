import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

const routers = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});

export default router;
