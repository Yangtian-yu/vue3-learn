<template>
  <div>
    <input type="text" v-model="todoName" @keydown.enter="addTodo()" />
    <!-- 待办事项列表 -->
    <div v-for="item in todos" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "../store";

const store = useStore(key);
const router = useRouter();
const todos = computed(() => store.state.todos?.todos);
const todoName = ref("");
const addTodo = (): void => {
  store.dispatch("todos/addTodo", todoName.value);
  todoName.value = "";
  router.push("/");
};
</script>

<style scoped></style>
