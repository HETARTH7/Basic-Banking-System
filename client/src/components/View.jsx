import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
const View = () => {
  const [user, setUser] = useState([]);
  axios
    .get("http://localhost:5000/customer/all")
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <Navbar />
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phno</th>
          <th>Email</th>
          <th>Balance</th>
        </tr>
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
      </table>
    </div>
  );
};

export default View;
