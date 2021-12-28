import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import EditTodo from "./components/todos/EditTodo.vue";
createApp(App).component("EditTodo", EditTodo).mount("#app");
