export default function PriorityChart({ counts }) {
  const maxCount = Math.max(1, ...Object.values(counts));
  const bars = [
    { key: "critical", color: "var(--red)" },
    { key: "high", color: "var(--magenta)" },
    { key: "normal", color: "var(--cyan)" },
    { key: "low", color: "var(--text-dim)" },
  ];
  return (
    <div className="ts-widget">
      <div className="ts-widget-title">PRIORITY_DISTRIBUTION</div>
      <div className="ts-mini-chart">
        {bars.map(({ key, color }) => {
          const c = counts[key] || 0;
          return (
            <div
              key={key}
              className="ts-bar"
              title={`${key}: ${c}`}
              style={{
                background: color,
                opacity: 0.85,
                height: Math.max(
                  c > 0 ? 3 : 1,
                  Math.round((c / maxCount) * 48),
                ),
                transition: "height 0.5s ease",
              }}
            />
          );
        })}
      </div>
      <div className="ts-chart-legend">
        {[
          ["var(--red)", "CRIT"],
          ["var(--magenta)", "HIGH"],
          ["var(--cyan)", "NORM"],
          ["var(--text-dim)", "LOW"],
        ].map(([c, l]) => (
          <span key={l} style={{ color: c }}>
            ■ {l}
          </span>
        ))}
      </div>
    </div>
  );
}
