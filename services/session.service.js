const sessions = new Map();

export function getSession(sessionId) {
  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, {
      turns: [],
      createdAt: Date.now(),
    });
  }
  return sessions.get(sessionId);
}

export function addTurn(sessionId, role, text) {
  const session = getSession(sessionId);
  session.turns.push({ role, text });

  // keep last 8 turns only (important)
  if (session.turns.length > 8) {
    session.turns.shift();
  }
}

export function getConversationText(sessionId) {
  const session = getSession(sessionId);
  return session.turns.map((t) => `${t.role}: ${t.text}`).join("\n");
}

export function endSession(sessionId) {
  sessions.delete(sessionId);
}
