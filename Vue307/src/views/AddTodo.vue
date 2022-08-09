<template>
  <!-- 标题 -->
  <!-- <h1 :style="{ color: titleInfo.color }"> {{ titleInfo.value }}</h1> -->
  <!-- <div>
    {{ counter }}
  </div>
  <div>
    {{ doubleCounter }}
  </div> -->
  <input type="text" v-model="todoName" @keydown="addTodo">
  <el-button type="primary" @click="addTodo" :icon="Search">add</el-button>
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script  lang="ts" setup>
import { ref } from 'vue';
import { Todo } from '../types'
import { Search } from '@element-plus/icons-vue'


const items = ref([] as Todo[])
const todoName = ref("")
// items.value.push({
//   id: 1,
//   name: "vue3",
//   completed: false
// })
const addTodo = (): void => {
  items.value.push({
    id: items.value.length + 1,
    name: todoName.value,
    completed: false
  });
  todoName.value = ""
}

</script>

<style lang="scss" scoped>
</style>
