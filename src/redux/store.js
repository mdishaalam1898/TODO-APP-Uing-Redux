import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducers";
import { noteReducer } from "./reducers/noteReducers";
import { combineReducers } from "redux";

// // for multiple reducers

const result = combineReducers({
  todoReducer,
  noteReducer,
});
export const store = redux.createStore(result);
