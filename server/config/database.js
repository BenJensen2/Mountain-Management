const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/BBSP", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to BBSP Database"))
  .catch((err) =>
    console.log("Something went wrong connecting with the database", err)
  );

require("../models/Member");
