const mongoose = require("mongoose");

const custSchema = {
  name: String,
  phno: Number,
  email: String,
  balance: Number,
};

const Customer = new mongoose.model("Customer", custSchema);

module.exports = Customer;
