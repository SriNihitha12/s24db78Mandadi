const mongoose = require("mongoose")
const hillstationsSchema = mongoose.Schema({
location: String,
name: String,
maxtemperature: Number
})
module.exports = mongoose.model("hillstations",
hillstationsSchema)
