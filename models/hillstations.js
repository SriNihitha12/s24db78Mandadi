const mongoose = require("mongoose")
const hillstationsSchema = mongoose.Schema({
location: {
    type:String,
    minlenght:1,
    maxlength:12,
},
name: {
    type:String,
    minlenght:1,
    maxlength:12,
},
maxtemperature: Number
})
module.exports = mongoose.model("hillstations",
hillstationsSchema)
