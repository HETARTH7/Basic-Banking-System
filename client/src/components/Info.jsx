import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const View = () => {
  const id = sessionStorage.getItem("user");
  const [user, setUser] = useState([]);
  axios
    .get(`http://localhost:5000/customer/${id}`)
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));

  return (
    <div>
      <Navbar />
      {user.map((x, index) => {
        return (
          <h1 key={index} style={{ marginLeft: "38rem", paddingTop: "2.5rem" }}>
            {x.name}'s Information
          </h1>
        );
      })}
      <table
        style={{
          width: "40rem",
          textAlign: "center",
          marginLeft: "30rem",
          marginTop: "2rem",
        }}
        className="table"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {user.map((x, index) => {
            return (
              <tr key={index}>
                <td>{x.name}</td>
                <td>{x.phno}</td>
                <td>{x.email}</td>
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
