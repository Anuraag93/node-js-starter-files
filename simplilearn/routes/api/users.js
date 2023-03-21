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
    // res.sendStatus(400);
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

//create a new user

router.post("/", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
  };
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }
  users.push(newUser);
  res.json(users);
});

//update a user

router.put("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    const updUser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updUser.name ? updUser.name : user.name;
        user.email = updUser.email ? updUser.email : user.email;
        res.json({ msg: "User updated", user });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

//delete a user
router.delete("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    users = users.filter((user) => user.id !== parseInt(req.params.id));
    res.json({
      msg: "User deleted",
      users,
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

module.exports = router;
