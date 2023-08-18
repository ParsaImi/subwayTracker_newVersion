const mongoose = require("mongoose")
const TeamSchema = new mongoose.Schema({
    name : {type : String},
    users : {type : [mongoose.Types.ObjectId]},
    desc : {type : String},
    owner : {type : mongoose.Types.ObjectId}
})


const Team = mongoose.model("Team" , TeamSchema)
module.exports = {
    Team
}