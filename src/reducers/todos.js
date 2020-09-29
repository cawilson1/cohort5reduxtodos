import { ADD_TODO } from "../actions";

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
    //do something
    default:
      return state;
  }
}
