const express = require("express");
const router = express.Router();
const profileCtrl = require("../../controllers/api/profile");
const authenticate = require("../../helpers/authenticate");

router.use(authenticate);

router.post("/:id", profileCtrl.create);
router.get("/:id/profile/show", profileCtrl.show);

module.exports = router;