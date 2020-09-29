import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [form, setForm] = useState("");
  function addTodoClearForm() {
    const temp = form;
    setForm("");
    dispatch(addTodo(temp));
  }
  return (
    <div>
      <input value={form} onChange={e => setForm(e.target.value)} />
      <button onClick={addTodoClearForm}>Add a Todo!</button>
    </div>
  );
};

export default connect()(AddTodo);
