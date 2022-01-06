<template>
  <div>
    <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
    <div>{{ counter }}</div>
    <div>{{ doubleCounter }}</div>
    <input
      type="text"
      v-model="todoName"
      @keydown.enter="addTodo(newTodo(todoName))"
    />
    <div v-for="todo in todos" :key="todo.id">{{ todo.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, computed } from "vue";
import type { Todo, TitleInfo } from "../type";
import { key } from "../store/index";
import { useStore } from "vuex";
defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
  },
});
const store = useStore(key);
const counter = computed(() => store.state.counter);
const doubleCounter = computed(() => counter.value * 2);
const todos = computed(() => store.state.todos.todos);
const todoName = ref("");
const newTodo = (todoName: string): Todo => {
  return {
    id: todos.value.length + 1,
    title: todoName,
    complete: false,
  };
};
const addTodo = (todo: Todo): void => {
  todos.value.push(todo);
  todoName.value = "";
};
</script>

<style scoped></style>
