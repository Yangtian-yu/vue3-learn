<template>
  <div>路由信息</div>
  <div>
    {{ mainStore.name }}<br />
    长度：{{ mainStore.nameLength }}
  </div>
  <hr />
  <NButton type="primary" @click="updateName">修改store中的name</NButton>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store/main";
const mainStore = useMainStore();
const updateName = () => {
  // eslint-disable-next-line no-console
  console.log(import.meta.env.VITE_APP_WEB_URL);
  //$patch 修改 store 中的数据
  mainStore.$patch({
    name: "名称被修改了，nameLength也随之改变了",
  });
};
</script>
<script lang="ts">
import { defineComponent } from "vue";
import { NButton } from "naive-ui";

export default defineComponent({
  components: {
    NButton,
  },
});
</script>
<style lang="scss" scoped></style>
