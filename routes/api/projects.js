const express = require('express');
const router = express.Router();
const projectsCtrl = require("../../controllers/api/projects");
const authenticate = require("../../helpers/authenticate");


router.use(authenticate);
router.get('/', projectsCtrl.index);

module.exports = router;