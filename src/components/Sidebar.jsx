import { PRIORITY_COLORS } from "../constants";

export default function Sidebar({
  tasks,
  currentFilter,
  setFilter,
  clearCompleted,
  isOpen,
}) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const pending = total - done;
  const overdue = tasks.filter(
    (t) => t.priority === "critical" && !t.done,
  ).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const counts = {
    all: total,
    active: tasks.filter((t) => !t.done).length,
    done,
    critical: tasks.filter((t) => t.priority === "critical").length,
    high: tasks.filter((t) => t.priority === "high").length,
    normal: tasks.filter((t) => t.priority === "normal").length,
    low: tasks.filter((t) => t.priority === "low").length,
  };

  return (
    <aside
      className={`ts-sidebar ${isOpen ? "open" : ""}`}
      role="navigation"
      aria-label="Task filters"
    >
      <div className="ts-nav-section-label">— VIEWS —</div>

      {[
        ["all", "◈", "ALL_TASKS"],
        ["active", "▶", "ACTIVE"],
        ["done", "✓", "COMPLETED"],
      ].map(([f, icon, label]) => (
        <button
          key={f}
          className={`ts-nav-btn ${currentFilter === f ? "active" : ""}`}
          onClick={() => setFilter(f)}
        >
          <div className="icon">{icon}</div>
          {label}
          <span className="ts-nav-count">{counts[f]}</span>
        </button>
      ))}

      <div className="ts-nav-section-label" style={{ marginTop: 6 }}>
        — PRIORITY —
      </div>

      {[
        ["critical", "var(--red)"],
        ["high", "var(--magenta)"],
        ["normal", "var(--cyan)"],
        ["low", "var(--text-dim)"],
      ].map(([p, bg]) => (
        <button
          key={p}
          className={`ts-pf-btn sel-${p}`}
          onClick={() => setFilter(p)}
        >
          <div
            className="ts-pf-dot"
            style={{
              background: bg,
              boxShadow: p !== "low" ? `0 0 4px ${bg}` : undefined,
            }}
          />
          {p.toUpperCase()}
          <span
            style={{
              marginLeft: "auto",
              fontSize: 9,
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            {counts[p]}
          </span>
        </button>
      ))}

      <div className="ts-sidebar-stats">
        <div className="ts-prog-label">
          <span>COMPLETION</span>
          <span>{pct}%</span>
        </div>
        <div className="ts-prog-bar">
          <div className="ts-prog-fill" style={{ width: `${pct}%` }} />
        </div>

        <div style={{ marginTop: 14 }}>
          {[
            ["TOTAL", total, "var(--cyan)"],
            ["DONE", done, "var(--green)"],
            ["PENDING", pending, "var(--yellow)"],
            ["OVERDUE", overdue, "var(--red)"],
          ].map(([label, val, color]) => (
            <div className="ts-stat-row" key={label}>
              <span className="ts-stat-label">{label}</span>
              <span
                style={{
                  color,
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 10,
                }}
              >
                {val}
              </span>
            </div>
          ))}
        </div>

        <button className="ts-purge-btn" onClick={clearCompleted}>
          PURGE COMPLETED
        </button>
      </div>
    </aside>
  );
}
