const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  text: String,
  author: String,
});

module.exports = mongoose.model("quotes", QuoteSchema);
