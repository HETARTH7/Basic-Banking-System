const mongoose = require("mongoose");

const transferSchema = {
  sname: String,
  rname: String,
  amount: Number,
};

const Transfer = new mongoose.model("Transfer", transferSchema);

module.exports = Transfer;
