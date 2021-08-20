const express = require("express");
const router = express.Router();
const projectsCtrl = require("../../controllers/api/projects");
const authenticate = require("../../helpers/authenticate");

router.use(authenticate);
router.get("/", projectsCtrl.index);
router.get('/userproject', projectsCtrl.getUserProject);
router.get("/:projectId", projectsCtrl.getProjectInfo);
router.post("/:id/users", projectsCtrl.addToProject); 
router.post("/", projectsCtrl.create);

module.exports = router;
