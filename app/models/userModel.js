const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    userName : {type : String},
    email : {type : String},
    password : {type : String},
    role : {type : String}
})


const User = mongoose.model("User" , UserSchema)
module.exports = {
    User
}