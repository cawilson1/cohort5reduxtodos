export const ADD_TODO = "ADD_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISBILITY_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text: text,
    id: nextTodoId++
  };
};

export const setVisibilityFIlter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id: id
  };
};
