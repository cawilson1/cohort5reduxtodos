import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default TodoList;
