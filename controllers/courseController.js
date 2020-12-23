const CourseModel = require("../models/courseModel");

module.exports = {
  createCourse: (req, res) => {
    let course = new CourseModel({
      ...req.body,
      thumbnail: req.file.path,
    });
    course
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },

  updateCourse: (req, res) => {
    CourseModel.update({ _id: req.body._id }, req.body)
      .then((course) => {
        if (!course)
          res.json({ success: false, result: "No such course exists" });

        res.json(course);
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },

  getCourse: (req, res) => {
    CourseModel.findById(req._id)
      .then((course) => {
        if (!course) res.json({ success: false, result: "No courses found" });

        res.json({ sucess: true, result: course });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },

  getCourses: (req, res) => {
    CourseModel.find({})
      .then((courses) => {
        if (!courses) res.json({ success: false, result: "No courses found" });

        res.json({ sucess: true, result: courses });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },

  deleteCourse: (req, res) => {
    CourseModel.remove({ _id: req.body._id })
      .then((course) => {
        if (!course)
          res.json({
            success: false,
            result: "No course with such ID was found",
          });
        res.json({ success: true, result: result });
      })
      .catch((err) => res.json({ success: false, result: err }));
  },
};
