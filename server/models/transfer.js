const mongoose = require("mongoose");

const transferSchema = {
  name: String,
  amount: Number,
};

const Transfer = new mongoose.model("Transfer", transferSchema);

module.exports = Transfer;
