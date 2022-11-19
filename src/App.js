import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import CategoryPage from './components/Categories';
import BookPage from './components/BookPage';
import './App.css';

const App = () => (
  <>
    <nav className="nav">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="links">
        <li className="linkItem">
          <Link to="/" className="active">
            Books
          </Link>
        </li>
        <li className="linkItem">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<BookPage />} />
      <Route exact path="/categories" element={<CategoryPage />} />
    </Routes>
  </>
);

export default App;
