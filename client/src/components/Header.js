import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <NavLink to="/register">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
