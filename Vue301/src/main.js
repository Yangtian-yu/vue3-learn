import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import EditTodo from "./components/todos/EditTodo.vue";
import router from "./router/index";
import store from "./store/index";

createApp(App)
  .component("EditTodo", EditTodo)
  .use(router)
  .use(store)
  .mount("#app");
