const express = require("express");
const router = express.Router();
const coursesDatabase = require("../models/coursesDB.json");
const path = require("path");

router.use(express.static(path.join("public")));
router.get("/", (req, res) => {
  res.render("main", {
    coursesCount: coursesDatabase.length,
    coursesDatabase: coursesDatabase,
  });
});

router.post("/search", async (req, res) => {
  let payload = req.body.payload.trim();
  // figureout a way to do both upper and lower form
  let searchedCourse = await coursesDatabase.filter(
    (course) =>
      course.name.includes(payload) ||
      course.name.includes(payload) ||
      course.description.includes(payload) ||
      course.price.includes(payload)
  );
  res.send({
    payload: searchedCourse,
    fullCoursesLength: coursesDatabase.length,
  });
});

module.exports = router;
