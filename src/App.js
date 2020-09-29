import React, { useState } from "react";
import VisibleTodoList from "./containers/VisibleTodoList";
import AddTodo from "./components/AddTodo";
// import Footer from "./components/Footer";

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 0, text: "read a book", completed: true },
  //   { id: 1, text: "drink some coffee", completed: false }
  // ]); //text,completed
  const [visibilityFilter, setVisibilityFilter] = useState("SHOW_ALL"); //SHOW_COMPLETED//SHOW_ACTIVE

  // console.log(todos);
  console.log(visibilityFilter);
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      {/* <TodoList visibilityFilter={visibilityFilter} /> */}
      {/* <Footer setVisibilityFilter={setVisibilityFilter} /> */}
    </div>
  );
}

export default App;
