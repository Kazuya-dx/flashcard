import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
