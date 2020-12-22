const coursesRouter = require("./CourseRouter");

const routers = function (app) {
  app.use("/api/courses", coursesRouter);
};

module.exports = routers;
