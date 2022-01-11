import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';
// import { combineReducers } from 'redux';

// const reducers = combineReducers({
//   content: contentReducer
// })


const store = configureStore({
  reducer: contentReducer,
})

export default store;