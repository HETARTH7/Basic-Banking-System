import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const View = () => {
  const [user, setUser] = useState([]);
  axios
    .get("http://localhost:5000/customer/all")
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));

  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "38rem", paddingTop: "2.5rem" }}>
        List of all Customers
      </h1>
      <table
        style={{ width: "40rem", textAlign: "center", marginLeft: "30rem" ,marginTop:"2rem"}}
        className="table"
      >
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {user.map((x, index) => {
            return (
              <tr
                onClick={() => {
                  sessionStorage.setItem("user", x._id);
                  window.location = "/info";
                }}
                key={index}
              >
                <td>{index + 1}</td>
                <td>{x.name}</td>
                <td>{x.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default View;
