import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const urlLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IEXNcgPY8gfuqg4iq5ZV/books';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case FETCH_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export const fetchBooksList = createAsyncThunk(
  FETCH_BOOKS,
  async (payload, { dispatch }) => {
    const booksList = await fetch(`${urlLink}`).then((response) => response.json());
    const booksID = Object.keys(booksList);
    const formBooks = [];
    booksID.map((key) => formBooks.push({
      id: key,
      title: booksList[key][0].title,
      author: booksList[key][0].author,
      category: booksList[key][0].category,
    }));
    dispatch(fetchBook(formBooks));
  },
);

export const postBook = createAsyncThunk(
  ADD_BOOK,
  async (newBook, { dispatch }) => {
    await fetch(`${urlLink}`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: newBook.id,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    dispatch(addBook(newBook));
  },
);

export const deleteBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id, { dispatch }) => {
    await fetch(`${urlLink}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    dispatch(removeBook(id));
  },
);

export default BookReducer;
