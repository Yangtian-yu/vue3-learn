<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <Comp :title-info="{ value: '待办事项', color: 'red' }"></Comp> -->
    <comp-setup :title-info="{ value: '待办事项', color: 'red' }"></comp-setup>
  </div>
</template>

<script setup lang="ts">
import Comp from "../components/Comp.vue";
import CompSetup from "../components/CompSetup.vue";
</script>

<style scoped></style>
