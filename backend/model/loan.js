const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    bookId:String,
    documentNumberUser:String,
    bookName:String,
    UserName:String,
    loanDate:Date,
    loanTime: Number
});

module.exports = mongoose.model("Loan", loanSchema);