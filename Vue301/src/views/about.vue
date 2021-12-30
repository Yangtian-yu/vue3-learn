<template>
  <div>about page</div>
  <router-view></router-view>
</template>

<script>
export default {
  setup() {
    return {};
  },
  mounted() {
    console.log(this.$router);
  },
};
</script>

<style scoped></style>
