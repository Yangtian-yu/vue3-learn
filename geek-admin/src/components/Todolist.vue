<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list">
        <li v-for="todo in todos" :key="todo.title">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }"> {{ todo.title }}</span>
        </li>
      </transition-group>
    </ul>
    <div v-else></div>
    <div>
      全选 <input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
    <transition name="modal">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">哥，你啥也没输入</div>
      </div>
    </transition>

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

let { title, todos, addTodo, clear, active, all, allDone, showModal } =
  useTodos();
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
.info-wrapper {
  position: fixed;
  left: 50vw;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
