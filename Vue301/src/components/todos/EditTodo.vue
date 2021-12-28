<template>
  <div>
    <input
      type="text"
      v-bind="$attrs"
      :value="modelValue"
      @input="onInputChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
