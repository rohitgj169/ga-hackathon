const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  about: String,
  imageUrl: String,
  profession: String,
  portfolio: String,
  linkedin: String,
  twitter: String,
  github: String,
  skill1: String,
  skill2: String,
  skill3: String,
  desiredSkill1: String,
  desiredSkill2: String,
  desiredSkill3: String,
});

module.exports = mongoose.model("Profile", profileSchema);
