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
    const { title, date, players } = req.body;

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

module.exports = {
    getAllSessions,
    createSession
};