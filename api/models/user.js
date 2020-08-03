const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    Name: String,
    Position: String
})


module.exports = mongoose.model("user", UserSchema)

