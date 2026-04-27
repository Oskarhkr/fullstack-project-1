function PlayerManager({
  players,
  playerName,
  playerPosition,
  setPlayerName,
  setPlayerPosition,
  createPlayer,
  deletePlayer
}) {
  return (
    <div>
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
          <button onClick={() => deletePlayer(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PlayerManager;