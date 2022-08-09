import type { Module } from 'vuex'
import type { State } from '..'
import http from '../../api/request'
import type { Todo } from '../../type'

const initialState = {
  todos: [] as Todo[],
}

export type TodoState = typeof initialState

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, payload: Todo[]) {
      state.todos = payload
    },
    addTodo(state, payload: Todo) {
      state.todos.push(payload)
    },
  },
  actions: {
    initTodo({ commit }) {
      http.get<Todo>('todos/1').then((resp) => {
        commit('initTodo', [resp.data])
      })
      // setTimeout(() => {
      //   commit("initTodo", [
      //     {
      //       id: 1,
      //       title: "yangtianyu",
      //       completed: false,
      //     },
      //   ]);
      // }, 500);
    },
    addTodo({ commit, state }, payload: string) {
      commit('addTodo', {
        id: state.todos.length + 1,
        title: payload,
        completed: false,
      })
    },
  },
} as Module<TodoState, State>
