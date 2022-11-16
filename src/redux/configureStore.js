import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkStatusReducer from './Categories/categories';

const reducers = {
  books: bookReducer,
  checkStatus: checkStatusReducer,
};

const store = configureStore({ reducers });
store.getState();
