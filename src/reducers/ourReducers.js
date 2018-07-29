import { ADD_TODO, FETCH_TODOS, UPDATE_TODO, DELETE_TODO } from "../actions";

export default function(state = { todos: [] }, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case FETCH_TODOS:
      return { ...state };
    case UPDATE_TODO:
      return { ...state, value: action.payload };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
}
