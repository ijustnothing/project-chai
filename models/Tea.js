const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teaSchema = new Schema({
    name:String,
    location:String,
    // img: .........
    text:String,
    comments:[{ type: mongoose.Types.ObjectId, ref: 'posts' }]
})

module.exports = mongoose.model('tea', teaSchema)