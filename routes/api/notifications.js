const express = require("express");
const router = express.Router();
const authenticate = require("../../helpers/authenticate");
const notificationCtrl = require("../../controllers/api/notifications");

router.use(authenticate);
router.post("/", notificationCtrl.create);
router.get("/user", notificationCtrl.getNotifications);

module.exports = router;