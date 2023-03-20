const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../Users");

// Get all users
router.get("/", (req, res) => res.json(users));

//get users by id
router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});
module.exports = router;
