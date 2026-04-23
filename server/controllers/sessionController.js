let sessions = [
    {
        id: 1,
        title: "Passing Training",
        date: "2026-04-22",
        players: 14
    },
    {
        id: 2,
        title: "Shooting Training",
        date: "2026-04-24",
        players: 12
    }
];

const getAllSessions = (req, res) => {
    res.status(200).json(sessions);
};

const createSession = (req, res) => {
    const { title, date, players } = req.body || {};

    if (!title || !date || players === undefined) {
        return res.status(400).json({
            error: "title, date and players are required"
        });
    }

    const newSession = {
        id: sessions.length + 1,
        title,
        date,
        players
    };

    sessions.push(newSession);

    res.status(201).json(newSession);
};

const updateSession = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, date, players } = req.body || {};

    if (!title || !date || players === undefined) {
        return res.status(400).json({
            error: "title, date and players are required"
        });
    }

    const session = sessions.find((s) => s.id === id);

    if (!session) {
        return res.status(404).json({
            error: "session not found"
        });
    }

    session.title = title;
    session.date = date;
    session.players = players;

    res.status(200).json(session);
};

const deleteSession = (req, res) => {
    const id = parseInt(req.params.id);

    const sessionIndex = sessions.findIndex((s) => s.id === id);

    if (sessionIndex === -1) {
        return res.status(404).json({
            error: "session not found"
        });
    }

    sessions.splice(sessionIndex, 1);

    res.status(200).json({
        message: "session deleted"
    });
};

module.exports = {
    getAllSessions,
    createSession,
    updateSession,
    deleteSession
};