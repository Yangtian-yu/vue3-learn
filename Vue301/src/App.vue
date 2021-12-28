<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <NextPageVue></NextPageVue> -->
  <TodosVue></TodosVue>
  <EditTodo></EditTodo>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import NextPageVue from "./components/NextPage.vue";
import TodosVue from "./components/todos/Todos.vue";

export default {
  name: "App",
  components: {
    TodosVue,
    // HelloWorld,
    // NextPageVue,
  },
};
</script>
