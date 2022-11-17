import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="nav wrapper">
      <div className="logo">
        <Link to="/" className="linkitem">
          Bookstore CMS
        </Link>
      </div>
      <div className="links">
        <Link to="/" className="linkitem">
          Books
        </Link>

        <Link to="/Categories" className="linkitem">
          Categories
        </Link>
      </div>
    </nav>
  );
}

export default Header;
