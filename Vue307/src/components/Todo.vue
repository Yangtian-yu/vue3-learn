<template>
  <div>
    一共有 {{ itemCount }} 个
    <p></p>
    <input type="text" v-model="useStore.newItem">
    <el-button type="primary" @click="addItem">add</el-button>
    <ul v-for="item in useStore.items" :key="item.id">
      <TodoItem :item="item"></TodoItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../store/compositionApi';
import TodoItem from './TodoItem.vue';
import { storeToRefs } from 'pinia';


const useStore = useTodoStore()
// const { itemCount } = useStore   //结构赋值 无法响应式
const { itemCount } = storeToRefs(useStore)

async function addItem() {
  const next = await useStore.addItem()
  console.log(next);
}
</script>

<style scoped>
</style>
