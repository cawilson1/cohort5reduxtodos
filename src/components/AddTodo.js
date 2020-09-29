import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [form, setForm] = useState("");
  function addTodoClearForm() {
    dispatch(addTodo(form));
    setForm("");
  }
  return (
    <div>
      <input onChange={e => setForm(e.target.value)} />
      <button onClick={addTodoClearForm}>Add a Todo!</button>
    </div>
  );
};

export default connect()(AddTodo);
