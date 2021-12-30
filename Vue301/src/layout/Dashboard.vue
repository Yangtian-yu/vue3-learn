<template>
  <ul>
    <li>
      <!-- <router-link to="/"> dashboard </router-link> -->
      <NavLink to="/"></NavLink>
    </li>
    <li>
      <router-link to="/todos"> todos </router-link>
    </li>
    <li>
      <router-link to="/about"> about </router-link>
    </li>
  </ul>
</template>

<script setup>
import NavLink from "../components/NavLink.vue";
</script>

<style lang="scss" scoped></style>
