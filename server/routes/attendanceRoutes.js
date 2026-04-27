const express = require("express");
const router = express.Router();

const {
  getAttendances,
  createAttendance,
  getAttendanceBySession,
  deleteAttendance
} = require("../controllers/attendanceController");

router.get("/", getAttendances);
router.post("/", createAttendance);
router.get("/session/:sessionId", getAttendanceBySession);
router.delete("/:id", deleteAttendance);

module.exports = router;