const express = require("express"),
  router = express.Router(),
  QuotesController = require("../controllers/quotesController");

router.post("/createQuote", QuotesController.createQuote);
router.get("/getQuote", QuotesController.getQuote);

module.exports = router;
