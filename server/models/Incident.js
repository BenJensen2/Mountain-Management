const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema({
  Guest_Name: String,
  Responder_Name: String,
  Incident_Info: String,
  Personnel: String,
  Gear: String,
  Features: String,
},{timestamps: true});

mongoose.model("Incident",IncidentSchema)
