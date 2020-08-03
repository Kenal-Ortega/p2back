const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const LoggerSchema = Schema({
    Date: String,
    Log: String,
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user' 
        }
    ]
});

module.exports = mongoose.model("Log", LoggerSchema);
