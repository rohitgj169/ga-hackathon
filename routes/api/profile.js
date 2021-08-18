const express = require("express");
const router = express.Router();
const profileCtrl = require("../../controllers/api/profile");
const authenticate = require("../../helpers/authenticate");

router.use(authenticate);

router.post("/api/users/:id/profile", profileCtrl.create);

module.exports = router;