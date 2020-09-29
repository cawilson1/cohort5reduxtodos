import React, { useState } from "react";

const AddTodo = ({ setTodos, todos }) => {
  const [form, setForm] = useState("");
  function addTodoClearForm() {
    const todosLength = todos.length;
    setTodos([
      ...todos,
      {
        id: todosLength,
        text: form,
        completed: false
      }
    ]);
    setForm("");
  }
  return (
    <div>
      <input onChange={e => setForm(e.target.value)} />
      <button onClick={addTodoClearForm}>Add a Todo!</button>
    </div>
  );
};

export default AddTodo;
