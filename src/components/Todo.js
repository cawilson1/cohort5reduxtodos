import React from "react";

const Todo = ({ id, text, completed, boundToggleTodo }) => {
  return (
    <div>
      <div
        onClick={() => boundToggleTodo(id)}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </div>
    </div>
  );
};

export default Todo;
