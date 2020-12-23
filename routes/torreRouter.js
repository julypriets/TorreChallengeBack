const express = require("express"),
  router = express.Router(),
  TorreController = require("../controllers/torreController");

router.get("/verify-username", TorreController.verifyUsername);

module.exports = router;
