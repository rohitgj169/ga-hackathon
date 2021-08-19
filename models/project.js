const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    username: String,
    comment: String
})

const projectSchema = new Schema({
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    type: String,
    title: String,
    description: String,
    Comments: [commentSchema]
})

module.exports = mongoose.model('Project', projectSchema)