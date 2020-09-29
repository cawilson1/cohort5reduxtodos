import { connect } from "react-redux";
import TodoList from "../components/TodoList";

function mapStateToProps(state) {
  console.log(state, "STATE");
  return {
    todos: state.todos
  };
}

// function mapDispatchToProps(dispatch){
//     return {

//     }

// }

export default connect(mapStateToProps)(TodoList);
