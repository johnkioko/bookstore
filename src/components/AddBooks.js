import React from 'react';

const AddBooks = () => (
  <div className="wrapper">
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBooks;
