const mongoose = require("mongoose");

const transferSchema = {
  sender: String,
  reciever: String,
  amount: Number,
};

const Transfer = new mongoose.model("Transfer", transferSchema);

module.exports = Transfer;
