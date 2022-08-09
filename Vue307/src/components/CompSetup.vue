<template>
  <!-- 标题 -->
  <h1 :style="{ color: titleInfo.color }"> {{ titleInfo.value }}</h1>
  <div>
    {{ counter }}
  </div>
  <div>
    {{ doubleCounter }}
  </div>
  <input type="text" v-model="todoName" @keydown="addTodo(newTodo(todoName))">
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script  lang="ts" setup>
import { ref, computed } from 'vue';
import type { PropType } from "vue"
import { TitleInfo, Todo } from '../types'
//属性声明
defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true
  }
})
const counter = ref(0);
const doubleCounter = computed(() => {
  return counter.value * 2
})
const items = ref([] as Todo[])
const todoName = ref("")
items.value.push({
  id: 1,
  name: "vue3",
  completed: false
})
const newTodo = (todoName: string): Todo => {
  return {
    name: todoName,
    id: items.value.length + 1,
    completed: false
  }
}
const addTodo = (todo: Todo): void => {
  items.value.push(todo);
  todoName.value = ""
}
// const items = reactive({
//   items: [] as Todo[]
// })
</script>

<style lang="scss" scoped>
</style>
