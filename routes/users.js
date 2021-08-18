const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

router.post("/createProfile", usersCtrl.getProfile);

router.post("/updateProfile", usersCtrl.updateProfile)

module.exports = router;