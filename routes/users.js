const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

router.post("/createProfile", usersCtrl.getProfile);

module.exports = router;