<template>
  <div @click="$emit('click')">自定义时间</div>
</template>

<script>
export default {
  emits: ["click"],
};
</script>

<style scoped></style>
