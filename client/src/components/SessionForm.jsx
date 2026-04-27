function SessionForm({
  title,
  setTitle,
  players,
  selectedPlayers,
  handlePlayerSelect,
  createSession
}) {
  return (
    <div>
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
              checked={selectedPlayers.includes(p._id)}
              onChange={() => handlePlayerSelect(p._id)}
            />
            {p.name} ({p.position})
          </label>
        </div>
      ))}

      <button onClick={createSession}>Add Session</button>
    </div>
  );
}

export default SessionForm;