<template>
  <div>
    <li>
      {{ item.context }}
      <el-button type="primary" @click="useStore.remoeItem(item)">remove</el-button>
    </li>
  </div>
</template>

<script setup lang="ts">
import { Item } from '../store/compositionApi'
import { useTodoStore } from '../store/compositionApi'

defineProps<{ item: Item }>()

const useStore = useTodoStore()
</script>

<style scoped>
</style>
