import todos from "./todos";

export default function rootReducer(state = {}, action) {
  return {
    todos: todos(state.todos, action)
  };
}
