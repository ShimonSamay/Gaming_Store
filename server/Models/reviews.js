const mongoose = require("mongoose");

const Reviews = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    product_id: {
      type: String,
      required: true,
    },
    reviewer_id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reviews", Reviews);
