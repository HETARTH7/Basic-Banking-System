import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Transfer = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);

  const changeSender = (e) => {
    setFrom(e.target.value);
  };
  const changeReciever = (e) => {
    setTo(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };
  const transfer = (e) => {
    const data = { from, to, amount };
    axios
      .post("http://localhost:5000/transfer", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    window.location = "/view";
  };
  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "38rem", paddingTop: "2.5rem" }}>
        Transfer Money
      </h1>
      <form
        style={{
          width: "25rem",
          marginLeft: "35rem",
          marginTop: "5rem",
          border: "solid",
          height: "25rem",
        }}
        onSubmit={transfer}
        className="mb-3"
      >
        <input
          className="form-control"
          onChange={changeSender}
          placeholder="Enter Sender's Name"
          style={{ width: "20rem", margin: "2rem" }}
        ></input>
        <input
          className="form-control "
          onChange={changeReciever}
          placeholder="Enter Reciever's Name"
          style={{ width: "20rem", margin: "2rem" }}
        ></input>
        <input
          className=" form-control "
          onChange={changeAmount}
          placeholder="Enter amount"
          style={{ width: "20rem", margin: "2rem" }}
        ></input>
        <input
          style={{ marginLeft: "9.5rem" }}
          className="btn btn-dark"
          type="submit"
        ></input>
      </form>
    </div>
  );
};

export default Transfer;
