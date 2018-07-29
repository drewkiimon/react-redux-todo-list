import { ADD_TODO, FETCH_TODOS, UPDATE_TODO, DELETE_TODO } from "../actions";

export default function(state = { todos: [] }, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }]
      };
    case FETCH_TODOS:
      return { ...state };
    case UPDATE_TODO:
      console.log("Update called");
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.text === action.payload) {
            return { text: action.payload, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.text !== action.payload)
      };
    default:
      return state;
  }
}
