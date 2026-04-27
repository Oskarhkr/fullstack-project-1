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
        focusArea: {
            type: String,
            required: true
        },
        intensityLevel: {
            type: String,
            enum: ["Low", "Medium", "High"],
            required: true
        },
        players: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Player"
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Session", sessionSchema);