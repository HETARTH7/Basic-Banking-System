const router = require("express").Router();
const Customer = require("../models/customer");

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  if (id == "all") {
    Customer.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(`ERROR ${err}`));
  } else {
    Customer.find({ _id: id })
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(`ERROR ${err}`));
  }
});

module.exports = router;
