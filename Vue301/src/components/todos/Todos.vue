<template>
  <div>
    <!-- 新增 -->
    <EditTodo
      v-model:todo-title="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日代办"
      autocomplete="off"
    ></EditTodo>

    <!-- todo列表 -->

    <ul>
      <TodoItem
        v-for="todo in filterTodos"
        :key="todo.id"
        :todo="todo"
        v-model:edited-todo="editedTodo"
        @remove-todo="removeTodo"
      ></TodoItem>
    </ul>
    <!-- 过滤 -->
    <Filter :items="filterItems" v-model="visibitlity"></Filter>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import TodoItem from "./TodoItem.vue";
import Filter from "./Filter.vue";
import { useTodos } from "./useTodos";
import { useFilter } from "./useFilter";

export default {
  components: { TodoItem, Filter },
  setup() {
    const todoState = reactive({
      newTodo: "",
      editedTodo: null,
    });
    const { todos, addTodo, removeTodo } = useTodos(todoState);
    const filterState = useFilter(todos);
    return {
      ...toRefs(todoState),
      ...toRefs(filterState),
      addTodo,
      removeTodo,
    };
  },
};
</script>
