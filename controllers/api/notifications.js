const Notification = require("../../models/notifications");

async function create(req, res) {
  const newNotification = new Notification({
    toUser: req.body.toUser,
    projectId: req.body.projectId,
    fromUser: req.user._id,
  });
  console.log(newNotification);
  await newNotification.save();
  return res.send("Notification created");
}

async function getNotifications(req, res) {
  try {
    const notifications = await Notification.find({ toUser: req.user._id }).populate("toUser").populate("fromUser").populate("projectId");
    res.status(200).json(notifications);
  } catch (err) {
    res.status(400).json("failed to retrieve notifications")
  }
}

module.exports = {
  create,
  getNotifications,
};
