import { createApp } from "vue";
import App from "./App.vue";
import Store, { key } from "./store";
import router from "./router";

createApp(App).use(Store, key).use(router).mount("#app");
