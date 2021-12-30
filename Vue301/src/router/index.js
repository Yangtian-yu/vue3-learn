import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../layout/Dashboard.vue";
import Todos from "../components/todos/Todos.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/todos",
    component: Todos,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
