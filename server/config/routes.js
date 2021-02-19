const MemberController = require("../controllers/MemberController");

module.exports = function (app) {
  app.get("/api/index", MemberController.index);
  app.get("/api/allMembers", MemberController.getMembers);
  app.post("/api/member/new", MemberController.createMember);
  app.get("/api/member/:id", MemberController.getMember);
  app.delete("/api/member/delete/:id", MemberController.deleteMember);
};
