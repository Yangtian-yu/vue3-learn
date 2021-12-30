<template>
  <div>
    <li :class="{ completed: todo.completed, editing: todo === editedTodo }">
      <!-- 绑定完成状态 -->
      <div class="view">
        <input type="checkbox" v-model="todo.completed" />
        <label @dblclick="editdTodo(todo)">{{ todo.title }}</label>
        <button @click="removeTodo(todo.id)">X</button>
      </div>
      <!-- 编辑代办 -->
      <EditTodo
        class="edit"
        v-model:todo-title="todo.title"
        v-doto-focus="todo === editedTodo"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
      ></EditTodo>
    </li>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  props: {
    todo: {
      type: Object,
      require: true,
    },
    editedTodo: Object,
  },
  emits: ["remove-todo", "update:edited-todo"],
  setup(props, { emit }) {
    const state = reactive({
      beforeEditCache: "",
    });
    function removeTodo(todo) {
      emit("remove-todo", todo);
    }
    function editdTodo(todo) {
      state.beforeEditCache = todo.title;
      emit("update:edited-todo", todo);
    }
    function cancelEdit(todo) {
      state.beforeEditCache = todo.title;
      emit("update:edited-todo", null);
    }
    function doneEdit(todo) {
      emit("update:edited-todo", null);
    }
    return {
      ...toRefs(state),
      removeTodo,
      editdTodo,
      cancelEdit,
      doneEdit,
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
