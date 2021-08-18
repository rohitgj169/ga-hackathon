const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    UserId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    Username: String,
    Comment: String
})

const projectSchema = new Schema({
    Creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    Type: String,
    Members: String,
    Title: String,
    Description: String,
    Slots: String,
    EstimatedTime: String,
    Comments: [commentSchema]
})

module.exports = mongoose.model('Project', projectSchema)