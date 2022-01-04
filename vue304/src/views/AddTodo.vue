<template>
  <div>
    <input type="text" @keydown.enter="addTodo()" v-model="todoName" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "../store";

const router = useRouter();
const store = useStore(key);
const todoName = ref("");

const addTodo = (): void => {
  store.dispatch("todos/addTodo", todoName.value);
  todoName.value = "";
  //跳转回首页
  router.push("/");
};
</script>

<style scoped></style>
