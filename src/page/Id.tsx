import React from "react";
import { useParams, Link } from "react-router-dom";

function Id() {
  const courses = useParams;
  return (
    <>
      <div>Id:{courses}</div>
      <div>
        {" "}
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default Id;
