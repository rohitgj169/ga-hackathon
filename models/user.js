const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

<<<<<<< HEAD
const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true,
  },
  },
  {
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    },
  },
});

=======

// const userSchema = new Schema({
//     googleId: Number,
//     email: String,
//     name: String,
//     givenName: String,
//     familyName: String,
//     imageUrl: String,
//     about: String,
//     Employment: String,
//     jobTitle: String,
//     skills: String,
//     socialMedia: String,
// })

const SALT_ROUNDS = 6;


const userSchema = new Schema(
  {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true,
  },
  },
  {
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    },
  },
});

>>>>>>> d0ea6a04dcb369ab3e06a32ad11fe7e908d2a8ab
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    return next();
  });
});

module.exports = mongoose.model("User", userSchema);
