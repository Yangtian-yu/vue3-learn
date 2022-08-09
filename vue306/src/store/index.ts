import type { Store } from 'vuex'
import { createStore } from 'vuex'
import type { InjectionKey } from 'vue'
import type { TodoState } from './modules/Todos'
import todos from './modules/Todos'

export const key: InjectionKey<Store<State>> = Symbol()

export interface State {
  counter: number
  todos?: TodoState
}

const store = createStore({
  state: {
    counter: 1,
  },
  modules: {
    todos,
  },
})

export default store
