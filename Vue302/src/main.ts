import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";
import store, { key } from "./store/index";

createApp(App).use(router).use(store, key).mount("#app");
