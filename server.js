require("dotenv").config();
const express = require("express"),
  mongoose = require("mongoose"),
  app = express(),
  cors = require("cors"),
  path = require("path"),
  bodyParser = require("body-parser");

//Database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@torrechallenge.4hvcc.mongodb.net/learning?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

//Routes
require("./routes/routes")(app);

//Start Server
app.listen(8080, () => "Server running on port 8080");
