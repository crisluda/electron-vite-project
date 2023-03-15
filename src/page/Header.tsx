import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/user">
            <li>User</li>
          </Link>
          <Link to="/password">
            <li>Password</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
