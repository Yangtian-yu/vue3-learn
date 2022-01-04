import { Todo } from "./../../type.d";
import { Module } from "vuex";
import { State } from "..";
import http from "../../api/request";

const initaslState = {
  todos: [] as Todo[],
};

export type TodoState = typeof initaslState;

export default {
  namespaced: true,
  state: initaslState,
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
      console.log(import.meta.env.VITE_BASE_URL);
      http.get<Todo>("/todos/1").then((res) => {
        commit("addTodo", res.data);
      });
      // setTimeout(() => {
      //   commit("initTodo", [
      //     {
      //       id: 1,
      //       name: "vue",
      //       completed: false,
      //     },
      //   ]);
      // }, 500);
    },
    addTodo({ commit, state }, payload: string) {
      commit("addTodo", {
        id: state.todos.length + 1,
        name: payload,
        completed: false,
      });
    },
  },
} as Module<TodoState, State>;
