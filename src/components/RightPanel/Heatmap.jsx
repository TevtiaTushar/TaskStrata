export default function Heatmap() {
  const cells = Array.from({ length: 28 }, (_, i) => {
    const base = i < 7 ? 0.4 : i < 14 ? 0.6 : 0.9;
    return ["", "h1", "h2", "h3", "h4"][
      Math.min(Math.floor(Math.random() * 5 * base), 4)
    ];
  });
  return (
    <div className="ts-widget">
      <div className="ts-widget-title">TASK_DENSITY_MAP</div>
      <div className="ts-heatmap-grid">
        {cells.map((cls, i) => (
          <div key={i} className={`ts-heat-cell ${cls}`} />
        ))}
      </div>
      <div
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 8,
          color: "var(--text-dim)",
          marginTop: 8,
          textAlign: "right",
        }}
      >
        LAST 28 CYCLES
      </div>
    </div>
  );
}
