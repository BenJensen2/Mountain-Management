const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema(
  {
    Name: String,
    Location: String,
    Run: String,
  },
  { timestamps: true }
);

mongoose.model("Feature", FeatureSchema);
