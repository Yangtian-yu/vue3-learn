import { ref, watchEffect } from "vue";
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

export function useTodos(state) {
  const todos = ref(todosStorage.fetch());
  function addTodo() {
    if (state.newTodo != "") {
      todos.value.push({
        id: todos.value.length + 1,
        title: state.newTodo,
        completed: false,
      });
    }
    state.newTodo = "";
  }
  function removeTodo(todo) {
    todos.value.splice(todos.value.indexOf(todo), 1);
  }

  watchEffect(() => {
    todosStorage.save(todos.value);
  });
  return { todos, removeTodo, addTodo };
}
