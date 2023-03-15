import React from "react";
import { Link, Outlet } from "react-router-dom";

function Password() {
  return (
    <>
      <Link to="/">Home</Link>
      <div>
        <h1>Password</h1>
      </div>
      <div>
        <Link to="/password/reset">reset</Link>
        <Outlet />
      </div>
    </>
  );
}

export default Password;
