import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentSlice";
import saveContentReducer from "./saveContentSlice";
import showSearchReducer from "./showSearchSlice";
import { combineReducers } from "redux";

const reducers = combineReducers({
  content: contentReducer,
  saveContent: saveContentReducer,
  show: showSearchReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
