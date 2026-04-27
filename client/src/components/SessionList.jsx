function SessionList({ sessions, deleteSession }) {
  return (
    <div>
      <h2>Sessions</h2>

      {sessions.map((s) => (
        <div key={s._id} style={{ marginBottom: "20px" }}>
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

          <button onClick={() => deleteSession(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default SessionList;