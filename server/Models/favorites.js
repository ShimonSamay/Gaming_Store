const mongoose = require("mongoose");

const Favorites = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    favorites: {
      type: Array,
      default:[]
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorites", Favorites);
