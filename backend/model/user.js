const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    documentNumber:{
        type:String,
        unique:true, 
        required:true
    },
    documentType:String,
    email:{
        type:String,
        unique:true, 
        required:true
    },
    password:String,
    rol:{
        type:String,
        enum:['admin', 'user', 'librarian'],
        required:true
    }
},
{
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id; 
            delete ret.__v;
        }
    }
});

module.exports = mongoose.model("User", userSchema);