const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    Name: String,
    Position: String
})


module.exports = mongoose.model("user", UserSchema)

