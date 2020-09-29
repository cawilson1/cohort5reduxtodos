import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, text: "read a book", completed: true },
    { id: 1, text: "drink some coffee", completed: false }
  ]); //text,completed
  console.log(todos);
  return (
    <div>
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
