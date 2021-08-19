const express = require("express");
const router = express.Router();
const projectsCtrl = require("../../controllers/api/projects");
const authenticate = require("../../helpers/authenticate");

router.get("/:projectId", projectsCtrl.getProjectInfo);
router.get("/", projectsCtrl.index);
router.use(authenticate);
router.post("/", projectsCtrl.create);

module.exports = router;
