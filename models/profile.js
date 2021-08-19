const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  about: String,
  employment: String,
  jobTitle: String,
  currentSkills: [],
});

module.exports = mongoose.model("Profile", profileSchema);
