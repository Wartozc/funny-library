const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    bookId:String,
    documentNumberUser:String,
    bookName:String,
    UserName:String,
    loanDate:Date,
    loanTime: Number
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

module.exports = mongoose.model("Loan", loanSchema);