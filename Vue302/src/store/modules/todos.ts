import { State } from "./../index";
import { Todo } from "./../../types.d";
import { Module, Store } from "vuex";
import http from "../../api/request";

const initialState = {
  todos: [] as Todo[],
};

export type TodoState = typeof initialState;

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, payload: Todo[]) {
      state.todos = payload;
    },
    addTodo(state, payload: Todo) {
      state.todos.push(payload);
    },
  },
  actions: {
    initTodo({ commit }) {
      http.get<Todo>("/todos/1").then((resp) => {
        commit("addTodo", resp.data);
      });
      // setTimeout(() => {
      //   commit("initTodo", [
      //     {
      //       id: 1,
      //       name: "yangtianyu",
      //       completed: false,
      //     },
      //   ]);
      // }, 500);
    },
    addTodo({ commit, state }, payload: string) {
      commit("addTodo", {
        id: state.todos.length + 1,
        title: payload,
        completed: false,
      });
    },
  },
} as Module<TodoState, State>;
