import React from "react";
import Todo from "./Todo";

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
