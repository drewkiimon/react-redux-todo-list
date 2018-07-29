export const ADD_TODO = "add_todo";
export const FETCH_TODOS = "fetch_todos";
export const UPDATE_TODO = "update_todo";
export const DELETE_TODO = "delete_todo";
export const DELETE_COMPLETED = "delete_completed";

export function addTodo(value) {
  return {
    type: ADD_TODO,
    payload: value
  };
}

export function fetchTodos() {
  return {
    type: FETCH_TODOS
  };
}

export function updateTodo(value) {
  return {
    type: UPDATE_TODO,
    payload: value
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}

export function deleteCompleted() {
  return {
    type: DELETE_TODO
  };
}
