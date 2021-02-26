const mongoose = require("mongoose");

const RunSchema = new mongoose.Schema(
  {
    Name: String,
    Location: String,
    Difficulty: String,
    GeoLine: String,
    GeoPoly: String
  },
  { timestamps: true }
);

mongoose.model("Run", RunSchema);
