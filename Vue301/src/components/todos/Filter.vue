<template>
  <p class="filters">
    <span
      v-for="item in items"
      @click="$emit('update:modelValue', item.value)"
      :class="{ selected: modelValue === item.value }"
      :key="item.value"
      >{{ item.label }}</span
    >
  </p>
</template>

<script>
export default {
  props: ["items", "modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.filters > span {
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
  cursor: pointer;
}
.filters > span.selected {
  border-color: rgba(173, 47, 47, 0.5);
}
</style>
