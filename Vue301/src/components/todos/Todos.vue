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
    <!-- 回退到看板 -->
    <button @click="backToDash">回退</button>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import TodoItem from "./TodoItem.vue";
import Filter from "./Filter.vue";
import { useTodos } from "./useTodos";
import { useFilter } from "./useFilter";
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";

export default {
  components: { TodoItem, Filter },
  setup() {
    const todoState = reactive({
      newTodo: "",
      editedTodo: null,
    });
    const { todos, addTodo, removeTodo } = useTodos(todoState);
    const filterState = useFilter(todos);

    //获取路由实例
    const router = useRouter();
    //route是响应式对象，可监控其变化
    const route = useRoute();
    watch(
      () => route.query,
      (query) => {
        console.log(query);
      }
    );

    //守卫
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm("你确定离开当前页面么？");
      if (!answer) {
        return false;
      }
    });

    return {
      ...toRefs(todoState),
      ...toRefs(filterState),
      addTodo,
      removeTodo,
      backToDash() {
        console.log(router, "--------");
        console.log(this);
        router.push("/");
      },
    };
  },
};
</script>
