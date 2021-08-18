const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: Number,
    email: String,
    name: String,
    givenName: String,
    familyName: String,
    imageUrl: String,
    about: String,
    Employment: String,
    jobTitle: String,
    skills: String,
})


module.exports = mongoose.model('User', userSchema)