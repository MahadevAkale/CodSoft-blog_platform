import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ user, handleLogout }) => {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/create">Create Post</Link>
            </>
          ) : null}
        </div>
        <div className="auth-links">
          {user ? (
            <button onClick={handleLogout}>Sign Out</button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
