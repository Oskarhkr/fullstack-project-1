const Session = require("../models/Session");

// GET ALL
exports.getSessions = async (req, res) => {
    try {
        const sessions = await Session.find();
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ONE
exports.getSessionById = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);

        if (!session) {
            return res.status(404).json({ error: "Session not found" });
        }

        res.json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE
exports.createSession = async (req, res) => {
    try {
        const newSession = new Session(req.body);
        const savedSession = await newSession.save();
        res.status(201).json(savedSession);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// UPDATE
exports.updateSession = async (req, res) => {
    try {
        const updated = await Session.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Session not found" });
        }

        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE
exports.deleteSession = async (req, res) => {
    try {
        const deleted = await Session.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Session not found" });
        }

        res.json({ message: "Session deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};