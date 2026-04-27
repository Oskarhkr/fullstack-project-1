import { useEffect, useState } from "react";
import PlayerManager from "./components/PlayerManager";
import SessionForm from "./components/SessionForm";
import SessionList from "./components/SessionList";

function App() {
  const [sessions, setSessions] = useState([]);
  const [players, setPlayers] = useState([]);

  const [title, setTitle] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

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

  const handlePlayerSelect = (id) => {
    if (selectedPlayers.includes(id)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p !== id));
    } else {
      setSelectedPlayers([...selectedPlayers, id]);
    }
  };

  const createPlayer = async () => {
    await fetch("http://localhost:3000/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: playerName,
        age: 20,
        position: playerPosition
      })
    });

    setPlayerName("");
    setPlayerPosition("");
    fetchPlayers();
  };

  const deletePlayer = async (id) => {
    await fetch(`http://localhost:3000/api/players/${id}`, {
      method: "DELETE"
    });

    setPlayers(players.filter((p) => p._id !== id));
    fetchSessions();
  };

  const createSession = async () => {
    const res = await fetch("http://localhost:3000/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        date: "2026-04-30",
        focusArea: "Passing",
        intensityLevel: "High",
        players: selectedPlayers
      })
    });

    const data = await res.json();

    setSessions([data, ...sessions]);
    setTitle("");
    setSelectedPlayers([]);
  };

  const deleteSession = async (id) => {
    await fetch(`http://localhost:3000/api/sessions/${id}`, {
      method: "DELETE"
    });

    setSessions(sessions.filter((s) => s._id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Football Training Tracker</h1>

      <PlayerManager
        players={players}
        playerName={playerName}
        playerPosition={playerPosition}
        setPlayerName={setPlayerName}
        setPlayerPosition={setPlayerPosition}
        createPlayer={createPlayer}
        deletePlayer={deletePlayer}
      />

      <hr />

      <SessionForm
        title={title}
        setTitle={setTitle}
        players={players}
        selectedPlayers={selectedPlayers}
        handlePlayerSelect={handlePlayerSelect}
        createSession={createSession}
      />

      <hr />

      <SessionList
        sessions={sessions}
        deleteSession={deleteSession}
      />
    </div>
  );
}

export default App;