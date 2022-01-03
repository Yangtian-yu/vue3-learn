<template>
  <!-- 显示标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div>
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

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TitleInfo, Todo } from "../types";

export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      default: {},
    },
  },
  data() {
    return {
      counter: 1,
      items: [] as Todo[],
      todoName: "",
    };
  },
  created() {
    this.items.push({
      id: 1,
      title: "yangtianyu",
      completed: false,
    });
  },
  setup() {
    return {};
  },
  computed: {
    dobleCounter(): number {
      return this.counter * 2;
    },
  },
  methods: {
    newtodo(todoName: string): Todo {
      return {
        id: this.items.length + 1,
        title: todoName,
        completed: false,
      };
    },
    addTodo(todo: Todo): void {
      this.items.push(todo);
      this.todoName = "";
    },
  },
});
</script>

<style scoped></style>
