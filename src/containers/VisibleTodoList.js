import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

function getVisibleTodos(todos, vizFilter) {
  if (vizFilter === "SHOW_ALL") return todos;
  else if (vizFilter === "SHOW_COMPLETED")
    return todos.filter(todo => todo.completed);
  else if (vizFilter === "SHOW_ACTIVE")
    return todos.filter(todo => !todo.completed);
  return todos;
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    boundToggleTodo: id => dispatch(toggleTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
