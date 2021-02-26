const MemberController = require("../controllers/MemberController");
const IncidentController = require("../controllers/IncidentController");
const GuestController = require("../controllers/GuestController");

module.exports = function (app) {
  //MEMBERS
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

};
