const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const books = [
  { id: 1, author: 'Book-1 author', title: 'Book-1' },
  { id: 2, author: 'Book-2 author', title: 'Book-2' },
  { id: 3, author: 'Book-3 author', title: 'Book-3' },
  { id: 4, author: 'Book-4 author ', title: 'Book-4' },
];

export const AddBookFunction = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});
export const RemoveBookFunction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default BooksReducer;
