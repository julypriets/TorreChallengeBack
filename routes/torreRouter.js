const express = require("express"),
  router = express.Router(),
  TorreController = require("../controllers/torreController");

router.post("/verifyUsername", TorreController.verifyUsername);

module.exports = router;
