import * as React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="nav nav-pills nav-justified navbar navbar-expand-lg bg-dark ">
      <Link className="nav-link" to={"/"}>
        Home
      </Link>
      <Link className="nav-link" to={"/view"}>
        View Customers
      </Link>
      <Link className="nav-link" to={"/transfer"}>
        Transfer
      </Link>
    </div>
  );
}

export default Navbar;
