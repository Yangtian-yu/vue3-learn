<template>
  <div class="container">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item v-for="item in routers" :key="item.id">
            <pie-chart-outlined />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
          <!-- <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Home</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>About</span>
          </a-menu-item> -->
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
          <!-- <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            Bill is a cat.
          </div> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '../router/index'

const collapsed = ref(false);
const selectedKeys = ref(["home"])
const routers = router.options.routes[0].children

</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  color: red;
}

.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
