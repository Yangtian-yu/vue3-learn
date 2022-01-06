import { createStore, Store } from "vuex";
import todos, { TodoState } from "./modules/Todos";
import { InjectionKey } from "vue";

export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
  counter: number;
  todos?: TodoState;
};

const store = createStore({
  state: {
    counter: 1,
  },
  modules: {
    todos,
  },
});

export default store;
