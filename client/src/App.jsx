import { useEffect, useState } from "react";

function App() {
  const [sessions, setSessions] = useState([]);
  const [players, setPlayers] = useState([]);

  const [title, setTitle] = useState("");

  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // FETCH
  const fetchSessions = async () => {
    const res = await fetch("http://localhost:3000/api/sessions");
    const data = await res.json();
    setSessions(data);
  };

  const fetchPlayers = async () => {
    const res = await fetch("http://localhost:3000/api/players");
    const data = await res.json();
    setPlayers(data);
  };

  useEffect(() => {
    fetchSessions();
    fetchPlayers();
  }, []);

  // SELECT PLAYER
  const handlePlayerSelect = (id) => {
    if (selectedPlayers.includes(id)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p !== id));
    } else {
      setSelectedPlayers([...selectedPlayers, id]);
    }
  };

  // CREATE PLAYER
  const createPlayer = async () => {
    await fetch("http://localhost:3000/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playerName,
        age: 20,
        position: playerPosition,
      }),
    });

    setPlayerName("");
    setPlayerPosition("");
    fetchPlayers();
  };

  // 🔴 DELETE PLAYER
  const deletePlayer = async (id) => {
    await fetch(`http://localhost:3000/api/players/${id}`, {
      method: "DELETE",
    });

    setPlayers(players.filter((p) => p._id !== id));
  };

  // CREATE SESSION
  const createSession = async () => {
    const res = await fetch("http://localhost:3000/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        date: "2026-04-30",
        focusArea: "Passing",
        intensityLevel: "High",
        players: selectedPlayers,
      }),
    });

    const data = await res.json();
    setSessions([data, ...sessions]);

    setTitle("");
    setSelectedPlayers([]);
  };

  // DELETE SESSION
  const deleteSession = async (id) => {
    await fetch(`http://localhost:3000/api/sessions/${id}`, {
      method: "DELETE",
    });

    setSessions(sessions.filter((s) => s._id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Football Training Tracker</h1>

      <h2>Add Player</h2>

      <input
        placeholder="Player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />

      <input
        placeholder="Position"
        value={playerPosition}
        onChange={(e) => setPlayerPosition(e.target.value)}
      />

      <button onClick={createPlayer}>Add Player</button>

      <h3>Players</h3>

      {players.map((p) => (
        <div key={p._id}>
          {p.name} ({p.position})
          <button onClick={() => deletePlayer(p._id)}>
            Delete
          </button>
        </div>
      ))}

      <hr />

      <h2>Create Session</h2>

      <input
        placeholder="Session title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h3>Select Players</h3>

      {players.map((p) => (
        <div key={p._id}>
          <label>
            <input
              type="checkbox"
              onChange={() => handlePlayerSelect(p._id)}
            />
            {p.name} ({p.position})
          </label>
        </div>
      ))}

      <button onClick={createSession}>Add Session</button>

      <hr />

      <h2>Sessions</h2>

      {sessions.map((s) => (
        <div key={s._id}>
          <strong>{s.title}</strong>

          <ul>
            {s.players && s.players.length > 0 ? (
              s.players.map((p) => (
                <li key={p._id}>
                  {p.name} - {p.position}
                </li>
              ))
            ) : (
              <li>No players</li>
            )}
          </ul>

          <button onClick={() => deleteSession(s._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;