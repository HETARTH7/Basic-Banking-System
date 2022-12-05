const router = require("express").Router();
const Customer = require("../models/customer");
const Transfer = require("../models/transfer");

router.route("/").post((req, res) => {
  const sname = req.body.from;
  const rname = req.body.to;
  var amount = req.body.amount;

  Customer.updateOne({ name: rname }, { $inc: { balance: amount } }, (err) => {
    if (err) console.log(err);
  });
  Customer.updateOne({ name: sname }, { $inc: { balance: -amount } }, (err) => {
    if (err) console.log(err);
  });
  const transfer = new Transfer({ sname, rname, amount });
  transfer
    .save()
    .then(() => res.json("Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
