import { useState } from "react";

function SessionList({
  sessions,
  search,
  setSearch,
  updateSession,
  deleteSession
}) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const startEdit = (session) => {
    setEditingId(session._id);
    setEditTitle(session.title);
  };

  const saveEdit = (id) => {
    updateSession(id, editTitle);
    setEditingId(null);
    setEditTitle("");
  };

  return (
    <div>
      <h2>Sessions</h2>

      <input
        placeholder="Search sessions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {sessions.map((s) => (
        <div key={s._id} style={{ marginBottom: "20px" }}>
          {editingId === s._id ? (
            <div>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <button onClick={() => saveEdit(s._id)}>
                Save
              </button>

              <button onClick={() => setEditingId(null)}>
                Cancel
              </button>
            </div>
          ) : (
            <div>
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

              <button onClick={() => startEdit(s)}>
                Edit
              </button>

              <button onClick={() => deleteSession(s._id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SessionList;