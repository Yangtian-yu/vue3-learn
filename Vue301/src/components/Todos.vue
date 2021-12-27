<template>
  <div>
    <!-- 新增 -->
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日代办"
      autocomplete="off"
    />
    <!-- todo列表 -->
    <ul>
      <li
        v-for="todo in filterTodos"
        :key="todo.id"
        :class="{ completed: todo.completed, editing: todo === editedTodo }"
      >
        <!-- 绑定完成状态 -->
        <div class="view">
          <input type="checkbox" v-model="todo.completed" />
          <label @dblclick="editdTodo(todo)">{{ todo.title }}</label>
          <button @click="removeTodo(todo.id)">X</button>
        </div>
        <!-- 编辑代办 -->
        <input
          type="text"
          class="edit"
          v-doto-focus="todo === editedTodo"
          v-model="todo.title"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
        />
      </li>
    </ul>
    <!-- 过滤 -->
    <p class="filters">
      <span
        @click="visibility = 'all'"
        :class="{ selected: (visibility = 'all') }"
        >All</span
      >
      <span
        @click="visibility = 'Active'"
        :class="{ selected: (visibility = 'Active') }"
        >Active</span
      >
      <span
        @click="visibility = 'Completed'"
        :class="{ selected: (visibility = 'Completed') }"
        >Completed</span
      >
    </p>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
const filters = {
  all(todos) {
    return todos;
  },
  Active(todos) {
    return todos.filter((todo) => !todo.completed);
  },
  Completedall(todos) {
    return todos.filter((todo) => todo.completed);
  },
};
export default {
  setup() {
    const state = reactive({
      newTodo: "",
      todos: [],
      beforeEditCache: "", //缓存编辑钱的title
      editedTodo: null, //正在编辑的todo
      visibitlity: "all",
      filterTodos: computed(() => {
        filters[state.visibitlity](state.todos);
      }),
    });
    function addTodo() {
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false,
      });
      state.newTodo = "";
    }
    function removeTodo(todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    }
    function editdTodo(todo) {
      state.beforeEditCache = todo.title;
      state.editedTodo = todo;
    }
    function cancelEdit(todo) {
      state.beforeEditCache = todo.title;
      state.editedTodo = null;
    }
    function doneEdit(todo) {
      state.editedTodo = "";
    }
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      doneEdit,
      cancelEdit,
      editdTodo,
    };
  },
  directives: {
    "doto-focus": (el, { value }) => {
      if (value) {
        el.focus();
      }
    },
  },
};
</script>

<style scoped>
.completed label {
  text-decoration: line-through;
}

.edit,
.editing .view {
  display: none;
}
.view,
.editing .edit {
  display: block;
}
</style>
