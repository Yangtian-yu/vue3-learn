

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <el-button type="primary">
    <router-link to="/">todo</router-link>
  </el-button>
  <p></p>
  <el-button type="primary">
    <router-link to="/add">add</router-link>
  </el-button>
  <p></p>
  <el-button type="primary">
    <router-link to="/pinia">pinia</router-link>
  </el-button>
  <div>
    <router-view></router-view>
  </div>

</template>

<script lang="ts" setup>

// This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
