import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    boundToggleTodo: id => dispatch(toggleTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
