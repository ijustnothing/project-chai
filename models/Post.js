const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    text:String,
    author:[{ type: mongoose.Types.ObjectId, ref: 'users' }],
    tea:[{ type: mongoose.Types.ObjectId, ref: 'tea' }],
})

module.exports = mongoose.model('posts', postSchema)