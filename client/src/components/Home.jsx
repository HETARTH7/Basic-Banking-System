import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center",paddingTop:"15rem" }}>BASIC BANKING SYSTEM</h1>
    </div>
  );
};

export default Home;
