<template>
  <!-- <Comp :title-info="{ value: '待办事项', color: 'red' }"></Comp> -->
  <CompSetupVue
    :title-info="{ value: '待办事项', color: 'red' }"
  ></CompSetupVue>
</template>

<script setup lang="ts">
import Comp from "../components/Comp.vue";
import CompSetupVue from "../components/CompSetup.vue";
</script>

<style scoped></style>
