const coursesRouter = require("./courseRouter");

const routers = function (app) {
  app.use("/api/courses", coursesRouter);
};

module.exports = routers;
