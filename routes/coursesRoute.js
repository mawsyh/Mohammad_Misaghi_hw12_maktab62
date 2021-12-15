const express = require("express");
const router = express.Router();
const coursesDatabase = require("../models/coursesDB.json");
const path = require("path");

router.use(express.static(path.join("public")));
router.get("/:id", (req, res) => {
  const targetCourse = coursesDatabase.find(
    (course) => course.courseId === Number(req.params.id)
  );
  if (targetCourse) {
    res.render("courses", {
      name: coursesDatabase[req.params.id - 1].name,
      description: coursesDatabase[req.params.id - 1].description,
      price: coursesDatabase[req.params.id - 1].price,
      imageAddress: coursesDatabase[req.params.id - 1].imageAddress,
      moreInfo: coursesDatabase[req.params.id - 1].moreInfo,
      sessions: coursesDatabase[req.params.id - 1].sessions,
      instructor: coursesDatabase[req.params.id - 1].instructor,
      primaryColor: coursesDatabase[req.params.id - 1].primaryColor,
      secondaryColor: coursesDatabase[req.params.id - 1].secondaryColor,
    });
  } else {
    res.send("error 404");
  }
});

module.exports = router;
