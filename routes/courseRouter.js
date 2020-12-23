const express = require("express"),
  router = express.Router(),
  CourseController = require("../controllers/courseController"),
  multer = require("../utils/storage");

router.post(
  "/createCourse",
  multer.single("imageFile"),
  CourseController.createCourse
);
router.post("/updateCourse", CourseController.updateCourse);
router.get("/getCourses", CourseController.getCourses);
router.get("/getCourse", CourseController.getCourse);
router.delete("/deleteCourse", CourseController.deleteCourse);

module.exports = router;
