const getAllSessions = (req, res) => {
    const sessions = [
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

    res.json(sessions);
};

module.exports = { getAllSessions };