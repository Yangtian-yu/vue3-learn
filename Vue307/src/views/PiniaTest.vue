<template>
  <div>
    <h1>hello pinia</h1>
    <PiniaTest></PiniaTest>
    <div>
      {{ userStore.userName }}
    </div>
    <el-input v-model="username" style="width: 200px;" @keydown="changeUsername"></el-input>
    <el-input v-model="input" style="width: 200px;"></el-input>
    <el-button type="primary" @click="add">add</el-button>
    <hr>
    <ul>
      <li v-for="(item, index) in userStore.rawItems" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import PiniaTest from '../components/PiniaLogo.vue'
import { ref } from 'vue';
import { useCartStore } from '../store'
const userStore = useCartStore()
const input = ref("")
const username = ref("")
const add = () => {
  console.log(input.value);
  if (!input.value) return
  userStore.addItem(input.value)
  input.value = ""
}
const changeUsername = () => {
  userStore.changeUserName(username.value)
}
</script>

<style scoped>
</style>
