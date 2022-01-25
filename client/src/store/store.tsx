import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentSlice";
import saveContentReducer from "./saveContentSlice";
import { combineReducers } from "redux";

const reducers = combineReducers({
  content: contentReducer,
  saveContent: saveContentReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
