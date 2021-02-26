const MemberController = require("../controllers/MemberController");
const IncidentController = require("../controllers/IncidentController");
const GuestController = require("../controllers/GuestController");
const RunController = require("../controllers/RunController");
const FeatureController = require("../controllers/FeatureController");

module.exports = function (app) {
  // MEMBERS
  app.get("/api/index", MemberController.index);
  app.get("/api/allMembers", MemberController.getMembers);
  app.post("/api/member/new", MemberController.createMember);
  app.get("/api/member/:id", MemberController.getMember);
  app.delete("/api/member/delete/:id", MemberController.deleteMember);

  // INCIDENTS
  app.get("/api/allIncidents", IncidentController.getIncidents);
  app.post("/api/incident/new", IncidentController.createIncident);
  app.get("/api/incident/:id", IncidentController.getIncident);
  app.put("/api/incident/update/:id", IncidentController.updateIncident);
  app.delete("/api/incident/delete/:id", IncidentController.deleteIncident);

  // GUESTS
  app.get("/api/index", GuestController.index);
  app.get("/api/allGuests", GuestController.getGuests);
  app.post("/api/guest/new", GuestController.createGuest);
  app.get("/api/guest/:id", GuestController.getGuest);
  app.delete("/api/guest/delete/:id", GuestController.deleteGuest);

  // CONTACTS
  app.get("/api/index", GuestController.index);
  app.get("/api/allGuests", GuestController.getGuests);
  app.post("/api/guest/new", GuestController.createGuest);
  app.get("/api/guest/:id", GuestController.getGuest);
  app.delete("/api/guest/delete/:id", GuestController.deleteGuest);

  // RUNS
  app.get("/api/index", RunController.index);
  app.get("/api/allRuns", RunController.getRuns);
  app.post("/api/run/new", RunController.createRun);
  app.get("/api/run/:id", RunController.getRun);
  app.delete("/api/run/delete/:id", RunController.deleteRun);

  // FEATURES
  app.get("/api/index", FeatureController.index);
  app.get("/api/allFeatures", FeatureController.getFeatures);
  app.post("/api/feature/new", FeatureController.createFeature);
  app.get("/api/feature/:id", FeatureController.getFeature);
  app.delete("/api/feature/delete/:id", FeatureController.deleteFeature);

};
