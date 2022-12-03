const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const customerRouter = require("./routes/customerRouter");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/bankDB");
app.use("/customer", customerRouter);

app.listen(5000, () => console.log("Server running on port 5000"));
