const express = require("express");
const router = express.Router();
const users = require("../models/users.json");

router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", (req, res) => {
  const chosenUser = users.find((user) => user.username === req.body.username);
  if (chosenUser) {
    chosenUser.password === req.body.password
      ? res.render("index.ejs", { username: chosenUser.username })
      : res.render("login.ejs", { visibility: "show" });
  } else {
    res.render("login.ejs", { visibility: "show" });
  }
});

module.exports = router;
