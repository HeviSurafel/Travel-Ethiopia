const mongoose = require("mongoose");
const packageSchema = mongoose.Schema(
  {
    price: {
      type: Number,
      required: [true, "Package price is required"],
    },
    title: {
      type: String,
      required: [true, "Package title is required"],
    },
    description: {
      type: String,
      required: [true, "Package description is required"],
    },
    image: {
      type: String,
      required: [true, "Package image is required"],
    },
    highlights: [{ type: String }],
    days: {
      type: Number,
      required: [true, "Package days is required"],
    },
    category: {
      type: String,
      required: [true, "Package category is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Package", packageSchema);
