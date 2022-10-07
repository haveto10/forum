import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className="respmenu">
      <input type="checkbox" />
      <i className="fas fa-bars"></i>
      <i className="fas fa-times"></i>
      <nav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/newpost">New Post</Link>
          </li>
          <li>
            <Link to="/threadview">Threads</Link>
          </li>

        </ul>
      </nav>
    </div>

  );
}

export default Navbar;