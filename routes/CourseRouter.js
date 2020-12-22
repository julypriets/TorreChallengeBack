const express = require("express"),
  router = express.Router(),
  CourseController = require("../controllers/courseController");

router.post("/createCourse", CourseController.createCourse);
router.post("/updateCourse", CourseController.updateCourse);
router.get("/getCourse", CourseController.getCourse);
router.delete("/deleteCourse", CourseController.deleteCourse);

module.exports = router;
