const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title:String,
    author:String,
    year:Number,
    description:String,
    image:{
        type:String,
        required:true
    },
    Category:String,
    state:{
        type:String,
        enum:['loaned', 'available'],
        required:true
    }
});

module.exports = mongoose.model("Book", bookSchema);