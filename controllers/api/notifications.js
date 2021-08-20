const Notification = require("../../models/notifications");

async function create(req, res) {
  const newNotification = new Notification({
    toUser: req.body.toUser,
    projectId: req.body.projectId,
    fromUser: req.user._id,
  })
  console.log(newNotification);
  await newNotification.save();
  return res.send("Notification created");
}

module.exports = {
  create,
};
