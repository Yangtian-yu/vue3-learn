<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
let count = ref(0);
function add() {
  count.value++;
}

let title = ref("");
let todos = ref([{ title: "学习Vue", done: false }]);
function addTodo() {
  todos.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}

let active = computed(() => {
  return todos.value.filter((v) => !v.done).length;
});
let all = computed(() => todos.value.length);
let allDone = computed({
  get: function () {
    return active.value === 0;
  },
  set: function (value) {
    return todos.value.forEach((v) => (v.done = value));
  },
});
</script>

<style scoped>
.done {
  color: gray;
  text-decoration: line-through;
}
</style>
