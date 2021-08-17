const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: Number,
    email: String,
    name: String,
    givenName: String,
    familyName: String,
    imageUrl: String,
    about: String
})


module.exports = mongoose.model('User', userSchema)