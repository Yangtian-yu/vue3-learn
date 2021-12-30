import { createApp } from "vue";

import App from "./App.vue";

import "./index.css";

import EditTodo from "./components/todos/EditTodo.vue";

import router from "./router/index";

createApp(App).component("EditTodo", EditTodo).use(router).mount("#app");
