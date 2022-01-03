<template>
  <!-- 显示标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div @click="$store.commit('add')">
    {{ counter }}
  </div>
  <div>{{ dobleCounter }}</div>

  <!-- 新增待办 -->
  <input
    type="text"
    v-model="todoName"
    @keydown.enter="addTodo(newtodo(todoName))"
  />
  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">
    {{ item.title }}
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import type { PropType } from "vue";
import type { TitleInfo, Todo } from "../types";
import { useStore } from "vuex";
import { key } from "../store";

// 属性声明
defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    default: {},
  },
});
const store = useStore(key);
const counter = computed(() => store.state.counter);
const dobleCounter = computed(() => counter.value * 2);
const items = ref([] as Todo[]);
items.value.push({
  id: 1,
  title: "yangtianyu",
  completed: false,
});

const todoName = ref("");
const newtodo = (todoName: string): Todo => {
  return {
    id: items.value.length + 1,
    title: todoName,
    completed: false,
  };
};
const addTodo = (todo: Todo): void => {
  items.value.push(todo);
  todoName.value = "";
};
</script>

<style scoped></style>
