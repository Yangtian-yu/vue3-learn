<template>
  <h1>这是关于页面</h1>
  <h1>你的评分是 {{ score }}</h1>
  <Rate :value="score" @update-rate="update"> <span>插槽效果</span> </Rate>
  <Rate :value="4" theme="red"></Rate>
</template>
<script setup>
import { ref } from "vue";
import Rate from "../components/Rate.vue";
let score = ref(3);
function update(num) {
  score.value = num;
}
</script>
