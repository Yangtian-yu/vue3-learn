<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '../store'

const store = useStore(key)
const router = useRouter()
const todoName = ref('')

const addTodo = (): void => {
  store.dispatch('todos/addTodo', todoName.value)
  todoName.value = ''
  router.push('/')
}
</script>

<template>
  <div>
    <input v-model="todoName" type="text" @keydown.enter="addTodo()">
  </div>
</template>

<style scoped></style>
