const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: false },
  endDate: Date,
  current: { type: Boolean, required: true },
  issuedBy: { type: String, required: true },
  skills: [{ type: String, required: true }],
  sectors: [{ type: String, required: true }],
  totalHours: { type: Number, required: true },
  certificateID: String,
  certificateExpirationDate: Date,
  certificateURL: String,
  thumbnail: {
    type: String,
    default:
      "https://res.cloudinary.com/julypriets/image/upload/v1608679028/planet_v2m4gu.png",
  },
});

module.exports = mongoose.model("courses", CourseSchema);
