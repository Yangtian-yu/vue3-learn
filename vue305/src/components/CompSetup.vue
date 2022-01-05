<template>
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div @click="$store.commit('add')">
    {{ counter }}
  </div>
  <div>
    {{ doubleCounter }}
  </div>
  <input
    type="text"
    @keydown.enter="addTodo(newTodo(todoName))"
    v-model="todoName"
  />
  <div v-for="item in todos" :key="item.id">{{ item.title }}</div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { Todo, TitleInfo } from "../type";
import type { PropType } from "vue";
import { useStore } from "vuex";
import { key } from "../store";

defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    default: {},
  },
});
const store = useStore(key);
const counter = computed(() => store.state.counter);
const doubleCounter = computed(() => counter.value * 2);
const todos = computed(() => store.state.todos?.todos);

const newTodo = (todoName: string): Todo => {
  return {
    id: todos.value!.length + 1,
    title: todoName,
    completed: false,
  };
};
const addTodo = (todo: Todo): void => {
  todos.value!.push(todo);
  todoName.value = "";
};
const todoName = ref("");
</script>

<style scoped></style>
