const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: false },
  endDate: Date,
  issuedBy: String,
  skills: [{ type: String, required: true }],
  sectors: [{ type: String, required: true }],
  totalHours: { type: Number, required: true },
  certificateID: String,
  certificateExpirationDate: Date,
  certificateURL: String,
  imageURL: String,
});

module.exports = mongoose.model("courses", CourseSchema);
