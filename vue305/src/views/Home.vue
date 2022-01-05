<template>
  <div>
    <!-- <Comp :title-info="{ color: '#cccccc', value: '这是一个标题' }"></Comp> -->
    <CompSetup
      :title-info="{ color: '#cccccc', value: '这是一个标题重构版' }"
    ></CompSetup>
  </div>
</template>

<script setup lang="ts">
import Comp from "../components/Comp.vue";
import CompSetup from "../components/CompSetup.vue";
</script>

<style scoped></style>
