const express = require("express");
const router = express.Router();

const {
    getSessions,
    getSessionById,
    createSession,
    updateSession,
    deleteSession
} = require("../controllers/sessionController");

router.get("/", getSessions);
router.get("/:id", getSessionById);
router.post("/", createSession);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);

module.exports = router;