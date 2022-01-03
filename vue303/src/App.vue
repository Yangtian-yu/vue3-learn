<template>
  <router-link to="/">goback</router-link>
  <br />
  <router-link to="/add">toadd</router-link>
  <router-view></router-view>
</template>
<script lang="ts">
export default defineComponent({
  name: "app",
});
</script>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from "vue";
import { key } from "./store/index";
import { useStore } from "vuex";
const store = useStore(key);
//store初始化
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
