<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 传统写法 -->
  <p @click="$store.commit('add')">{{ $store.state.count }}</p>
  <!-- composition写法 -->
  <p @click="add">{{ count }}</p>
  <Compts></Compts>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import Compts from "/comps/Compts.vue";
export default {
  name: "App",
  setup() {
    const store = useStore();
    console.log(store, "store");
    fetch("/api/users")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
    console.log(import.meta.env.VITE_TOKEN);
    return {
      // state: store.state,
      ...toRefs(store.state),
      add() {
        store.commit("add");
      },
    };
  },
  components: { Compts },
};
</script>
