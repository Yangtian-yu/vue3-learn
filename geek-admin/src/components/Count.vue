<template>
  <div @click="addCount">{{ count }}</div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
let count = computed(() => store.state.count);
const addCount = () => {
  store.commit("addCount");
};
</script>

<style scoped></style>
