import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import modeReducer from "./mode";

const rootReducer = combineReducers({
  user: userReducer,
  mode: modeReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
