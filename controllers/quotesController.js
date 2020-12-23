const QuoteModel = require("../models/quoteModel");

module.exports = {
  createQuote: (req, res) => {
    let quote = new QuoteModel({
      ...req.body,
    });
    quote
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },

  getQuote: (req, res) => {
    // Get the count of all quotes
    QuoteModel.countDocuments().exec(function (err, count) {
      // Get a random entry
      var random = Math.floor(Math.random() * count);

      // Again query all users but only fetch one offset by our random #
      QuoteModel.findOne()
        .skip(random)
        .exec(function (err, result) {
          res.json({ success: true, result: result });
        });
    });
  },
};
