import React from "react";
import Todo from "./Todo";

function checkIfRender(visibilityFilter, completed) {
  if (visibilityFilter === "SHOW_ALL") return true;
  else if (visibilityFilter === "SHOW_COMPLETED") {
    if (completed) return true;
    return false;
  } else if (visibilityFilter === "SHOW_ACTIVE") {
    if (completed) return false;
    return true;
  }
}

const TodoList = ({ todos, boundToggleTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          boundToggleTodo={boundToggleTodo}
        />
      ))}
    </div>
  );
};

// const TodoList = ({ todos, setTodos, visibilityFilter }) => {
//   return (
//     <div>
//       {todos.map(todo =>
//         checkIfRender(visibilityFilter, todo.completed) ? (
//           <Todo
//             id={todo.id}
//             text={todo.text}
//             completed={todo.completed}
//             setTodos={setTodos}
//             todos={todos}
//             visibilityFilter={visibilityFilter}
//           />
//         ) : (
//           <></>
//         )
//       )}
//     </div>
//   );
// };

export default TodoList;
