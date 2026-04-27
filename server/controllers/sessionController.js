const Session = require("../models/Session");

// GET ALL SESSIONS
exports.getSessions = async (req, res) => {
    try {
        const sessions = await Session.find().populate("players");
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ONE SESSION
exports.getSessionById = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id).populate("players");

        if (!session) {
            return res.status(404).json({ error: "Session not found" });
        }

        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE SESSION
exports.createSession = async (req, res) => {
    try {
        const newSession = new Session(req.body);
        const savedSession = await newSession.save();

        const populatedSession = await savedSession.populate("players");

        res.status(201).json(populatedSession);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// UPDATE SESSION
exports.updateSession = async (req, res) => {
    try {
        const updatedSession = await Session.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        ).populate("players");

        if (!updatedSession) {
            return res.status(404).json({ error: "Session not found" });
        }

        res.status(200).json(updatedSession);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE SESSION
exports.deleteSession = async (req, res) => {
    try {
        const deletedSession = await Session.findByIdAndDelete(req.params.id);

        if (!deletedSession) {
            return res.status(404).json({ error: "Session not found" });
        }

        res.status(200).json({ message: "Session deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};