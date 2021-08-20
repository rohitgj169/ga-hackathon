const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  comment: String,
});

const projectSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  time: String,
  description: String,
  requiredSoftware: String,
  requiredUI: String,
  requiredData: String,
  comments: [commentSchema],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  memberProfiles: Array,
});

module.exports = mongoose.model("Project", projectSchema);
