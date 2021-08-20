const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  toUser: {type:Schema.Types.ObjectId, ref: "User"},
  fromUser: {type:Schema.Types.ObjectId, ref: "User"},
  projectId: {type: Schema.Types.ObjectId, ref: "Project"}
});

module.exports = mongoose.model("Notifcation", notificationSchema);