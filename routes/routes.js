const coursesRouter = require("./courseRouter");
const quotesRouter = require("./quotesRouter");
const torreRouter = require("./torreRouter");

const routers = function (app) {
  app.use("/api/courses", coursesRouter);
  app.use("/api/quotes", quotesRouter);
  app.use("/api/torre", torreRouter);
};

module.exports = routers;
