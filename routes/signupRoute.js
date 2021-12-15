const express = require("express");
const router = express.Router();
const fsPromises = require("fs").promises;
const path = require("path");

const usersDB = {
  users: require("../models/users.json"),
  setUser: function (data) {
    this.users = data;
  },
};

router.get("/", (req, res) => {
  res.render("signup", { userVisibility: "hidden", passVisibility: "hidden" });
});

router.post("/", async (req, res) => {
  try {
    const { username, password, email, gender } = req.body;
    const newUser = {
      username: username,
      password: password,
      email: email,
      gender: gender,
      isLoggedIn: false,
    };
    if (usersDB.users.find((user) => user.username === username))
      return res.status(400).render("signup", {
        userVisibility: "block",
        passVisibility: "hidden",
      });
    else if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
      )
    )
      return res.status(400).render("signup", {
        passVisibility: "block",
        userVisibility: "hidden",
      });

    //set the user json file to the prev and add new user
    usersDB.setUser([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "../models/users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    // if register was successfull go to login page
    res.redirect("/login");
  } catch (e) {
    // if any error happens reload the page
    console.log(e);
    res.redirect("/signup");
  }
});

module.exports = router;
