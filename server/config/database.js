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

// Standalone database with Network updating & Connectivity.
// Remote access portal
// Single framed map with geolocation


// Incident, Locations, SMI, Safety, Features, Buildings, Bumps, Lift Equipment, Lights, Power, Water, 
