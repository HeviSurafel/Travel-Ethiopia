const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  title: { type: String, required: [true, "title is required"] },
  description: { type: String, required: [true, "description is required"] },
  date: { type: Date, required: [true, "Date is required"] },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  location: { type: String, required: [true, "location is required"] },
  image: { type: String, required: [true, "image is required"] },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "user is required"],
  },
});
module.exports = mongoose.model("event", eventSchema);
