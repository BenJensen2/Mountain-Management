const BBSPController = require("../controllers/members");

module.exports = function (app) {
  app.get("/api/index", BBSPController.index);
  app.get("/api/allMembers", BBSPController.getMembers);
  app.post("/api/member/new", BBSPController.createMember);
};
