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
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={transfer}>
        <input onChange={changeSender} placeholder="Reciever Name"></input>
        <input onChange={changeReciever} placeholder="Reciever Name"></input>
        <input onChange={changeAmount} placeholder="amount"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Transfer;
