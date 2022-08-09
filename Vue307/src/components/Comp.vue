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

<script  lang="ts">

import { defineComponent, PropType } from "vue";
import { TitleInfo, Todo } from '../types'
export default defineComponent({
  setup() {

    return {
    };
  },
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true
    },
  },
  data() {
    return {
      counter: 2,
      items: [] as Todo[],
      todoName: ""
    }
  },
  created() {
    this.items.push({
      id: 0,
      name: "vue4",
      completed: true
    })
  },
  computed: {
    doubleCounter(): number {
      return this.counter * 2
    }
  },
  methods: {
    newTodo(todoName: string): Todo {
      return {
        id: this.items.length + 1,
        name: todoName,
        completed: false
      }
    },
    addTodo(todo: Todo): void {
      this.items.push(todo);
      this.todoName = ""
    }
  },
});
</script>

<style lang="scss" scoped>
</style>
