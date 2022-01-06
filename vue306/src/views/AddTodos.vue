<template>
  <div>
    <input type="text" @keydown.enter="addTodo()" v-model="todoName" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store";

const store = useStore(key);
const router = useRouter();
const todoName = ref("");

const addTodo = (): void => {
  store.dispatch("todos/addTodo", todoName.value);
  todoName.value = "";
  router.push("/");
};
</script>

<style scoped></style>
