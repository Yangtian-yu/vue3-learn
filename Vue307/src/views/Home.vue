<template>
  <div>
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"> </HelloWorld> -->
    <Comp :titleInfo="{ value: '代办事项', color: 'green' }"></Comp>
    <CompSetup :titleInfo="{ value: '代办事项', color: 'red' }"></CompSetup>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from '../components/HelloWorld.vue'
import Comp from '../components/Comp.vue';
import CompSetup from '../components/CompSetup.vue'
</script>

<style scoped>
</style>
