import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import type { State } from "./store/index";

//模块扩展
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
