import { VisibilityFilters, SET_VISIBILITY_FILTER } from "../actions";

export default function visibilityFilter(
  state = VisibilityFilters.SHOW_ALL,
  action
) {
  console.log(state);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
