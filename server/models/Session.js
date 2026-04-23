const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        players: {
            type: Number,
            required: true
        },
        focusArea: {
            type: String,
            required: true
        },
        intensityLevel: {
            type: String,
            enum: ["Low", "Medium", "High"],
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Session", sessionSchema);