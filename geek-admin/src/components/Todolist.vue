<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else></div>
    <div>
      全选 <input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
    <h1 @click="add">{{ count }}</h1>
    <h2>{{ x }}</h2>
    <h2>{{ y }}</h2>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from "vue";
import useTodos from "./todolist";
import { useMouse } from "../utils/mouse.js";
let count = ref(0);
function add() {
  count.value++;
}

let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
let { x, y } = useMouse();
let color = ref("red");
watch(x, (newvalue, oldvalue) => {
  newvalue % 2 === 0 ? (color.value = "red") : (color.value = "blue");
});
watchEffect(() => {
  console.log("数据被修改了", count.value);
});
</script>

<style scoped>
.done {
  color: gray;
  text-decoration: line-through;
}
h2 {
  color: v-bind(color);
}
</style>
