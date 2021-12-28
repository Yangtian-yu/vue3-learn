<template>
  <div>
    <!-- 新增 -->
    <!-- <EditTodo
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日代办"
      autocomplete="off"
    ></EditTodo> -->

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
        @click="visibitlity = 'all'"
        :class="{ selected: visibitlity === 'all' }"
        >All</span
      >
      <span
        @click="visibitlity = 'Active'"
        :class="{ selected: visibitlity === 'Active' }"
        >Active</span
      >
      <span
        @click="visibitlity = 'Completed'"
        :class="{ selected: visibitlity === 'Completed' }"
        >Completed</span
      >
    </p>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from "vue";
const filters = {
  all(todos) {
    return todos;
  },
  Active(todos) {
    return todos.filter((todo) => !todo.completed);
  },
  Completed(todos) {
    return todos.filter((todo) => todo.completed);
  },
};
//缓存操作
const todosStorage = {
  fetch() {
    let todos = JSON.parse(localStorage.getItem("vue3-todos") || "[]");
    todos.forEach((todo, index) => {
      todo.id = index + 1;
    });
    return todos;
  },
  save(todos) {
    localStorage.setItem("vue3-todos", JSON.stringify(todos));
  },
};

export default {
  setup() {
    const state = reactive({
      newTodo: "",
      todos: [],
      beforeEditCache: "",
      editedTodo: null,
      visibitlity: "all",
      filterTodos: computed(() => {
        return filters[state.visibitlity](state.todos);
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
    watchEffect(() => {
      todosStorage.save(state.todos);
    });
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
.filters > span {
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
  cursor: pointer;
}
.filters > span.selected {
  border-color: rgba(173, 47, 47, 0.5);
}
</style>
