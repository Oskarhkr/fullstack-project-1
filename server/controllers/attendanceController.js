const Attendance = require("../models/Attendance");

// GET ALL ATTENDANCE RECORDS
exports.getAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.find()
      .populate("player")
      .populate("session");

    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE ATTENDANCE
exports.createAttendance = async (req, res) => {
  try {
    const newAttendance = new Attendance(req.body);
    const savedAttendance = await newAttendance.save();

    const populatedAttendance = await Attendance.findById(savedAttendance._id)
      .populate("player")
      .populate("session");

    res.status(201).json(populatedAttendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET ATTENDANCE BY SESSION
exports.getAttendanceBySession = async (req, res) => {
  try {
    const attendances = await Attendance.find({
      session: req.params.sessionId
    })
      .populate("player")
      .populate("session");

    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE ATTENDANCE
exports.deleteAttendance = async (req, res) => {
  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id);

    if (!deletedAttendance) {
      return res.status(404).json({ error: "Attendance record not found" });
    }

    res.status(200).json({ message: "Attendance record deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};