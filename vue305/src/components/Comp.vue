<template>
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div>
    {{ $store.state.counter }}
  </div>
  <div>
    {{ doubleCounter }}
  </div>
  <input
    type="text"
    @keydown.enter="addTodo(newTodo(todoName))"
    v-model="todoName"
  />
  <div v-for="item in items" :key="item.id">{{ item.title }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Todo, TitleInfo } from "../type";
import type { PropType } from "vue";
export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      default: {},
    },
  },
  data() {
    return {
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
  computed: {
    doubleCounter() {
      return this.$store.state.counter * 2;
    },
  },
  methods: {
    newTodo(todoName: string): Todo {
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
