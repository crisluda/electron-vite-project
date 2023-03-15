import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/">Home</Link>
      <div>
        <Link to="/dashboard/pnt">id</Link>
      </div>
    </>
  );
}

export default Dashboard;
