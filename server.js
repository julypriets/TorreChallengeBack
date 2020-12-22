require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@torrechallenge.4hvcc.mongodb.net/learning?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./routes/routes")(app);

//Start Server
app.listen(3000, () => "Server running on port 3000");
