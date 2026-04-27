const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true
    },
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true
    },
    status: {
      type: String,
      enum: ["Present", "Absent", "Late", "Injured"],
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 10
    },
    notes: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Attendance", attendanceSchema);