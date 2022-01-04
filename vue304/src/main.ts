import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import { key } from "./store/index";

createApp(App).use(router).use(store, key).mount("#app");
