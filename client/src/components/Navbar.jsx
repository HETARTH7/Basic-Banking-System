import * as React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/view"}>View Customers</Link>
      <Link to={"/transfer"}>Transfer</Link>
    </div>
  );
}

export default Navbar;
