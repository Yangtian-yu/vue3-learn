<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <Comp :title-info="{ value: '待办事项', color: 'red' }"></Comp> -->
    <comp-setup :title-info="{ value: '待办事项', color: 'red' }"></comp-setup>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import CompSetup from "@/components/CompSetup.vue";
import dayjs from "dayjs";
import { ref } from "vue";

const data = ref(
  dayjs(Number(new Date()) + 3600 * 8 * 1000).format("YYYY-MM-DD HH:mm:ss")
);
</script>

<style scoped></style>
