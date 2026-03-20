export default function CompletionRing({ total, done, critical }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  const circ = 2 * Math.PI * 28;
  return (
    <div className="ts-widget">
      <div className="ts-widget-title">
        COMPLETION_MATRIX <span>{pct}%</span>
      </div>
      <div className="ts-completion-ring">
        <svg width="70" height="70" viewBox="0 0 70 70">
          <circle
            cx="35"
            cy="35"
            r="28"
            fill="none"
            stroke="var(--surface3)"
            strokeWidth="6"
          />
          <circle
            cx="35"
            cy="35"
            r="28"
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="6"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - pct / 100)}
            strokeLinecap="square"
            transform="rotate(-90 35 35)"
            style={{
              transition: "stroke-dashoffset 0.6s ease",
              filter: "drop-shadow(0 0 6px var(--cyan))",
            }}
          />
        </svg>
        <div className="ts-ring-stats">
          {[
            ["DONE", done, "var(--green)"],
            ["ACTIVE", total - done, "var(--cyan)"],
            ["CRITICAL", critical, "var(--red)"],
          ].map(([l, v, c]) => (
            <div className="ts-ring-stat-row" key={l}>
              <span className="ts-ring-label">{l}</span>
              <span
                style={{
                  color: c,
                  fontWeight: 700,
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 10,
                }}
              >
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
