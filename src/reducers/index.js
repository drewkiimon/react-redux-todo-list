import ourReducers from "./ourReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: ourReducers
});

export default rootReducer;
