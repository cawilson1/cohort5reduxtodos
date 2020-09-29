import { ADD_TODO, TOGGLE_TODO } from "../actions";

export default function todos(state = [], action) {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        return action.id === todo.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
}
