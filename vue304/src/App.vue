<template>
  <router-link to="/"></router-link>
  <router-link to="/addTodo">todoAdd</router-link>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { key } from "./store";
const store = useStore(key);
store.dispatch("todos/initTodo");
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
