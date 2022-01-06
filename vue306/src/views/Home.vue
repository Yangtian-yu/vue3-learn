<template>
  <div>
    <!-- <Comp :title-info="{ color: 'green', value: '待办事项' }"></Comp> -->
    <CompSetup :title-info="{ color: 'green', value: '待办事项' }"></CompSetup>
  </div>
</template>

<script setup lang="ts">
import CompSetup from "../components/CompSetup.vue";
// import Comp from "../components/Comp.vue";
</script>

<style scoped></style>
