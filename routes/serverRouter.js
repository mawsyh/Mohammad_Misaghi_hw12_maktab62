const express = require("express");
const router = express.Router();
const mainPageRoute = require("./mainPageRoute.js");
const loginRoute = require("./loginRoute");
const signupRoute = require("./signupRoute");
const aboutRoute = require("./aboutRoute");
const contactRoute = require("./contactRoute");
const coursesRoute = require("./coursesRoute");

router.use("/", mainPageRoute);
router.use("/login", loginRoute);
router.use("/signup", signupRoute);
router.use("/about", aboutRoute);
router.use("/contact", contactRoute);
router.use("/courses", coursesRoute);

router.get("*", (req, res) => {
  res.send("error 404");
});

module.exports = router;
