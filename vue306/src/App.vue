<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from './store'

const store = useStore(key)
store.dispatch('todos/initTodo')
</script>

<template>
  <router-link to="/">
    home
  </router-link>
  <br>
  <router-link to="/add">
    ToTodos
  </router-link>
  <router-view />
</template>

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
