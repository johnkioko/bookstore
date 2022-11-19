import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import BookReducer from './books/books';
import checkReducer from './categories/categories';

const reducer = combineReducers({
  BookReducer,
  checkReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
