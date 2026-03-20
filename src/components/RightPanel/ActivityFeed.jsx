import { PRIORITY_COLORS } from "../../constants";

export default function ActivityFeed({ activity }) {
  const colorFor = (a) => {
    if (a.action === "COMPLETED") return "var(--green)";
    if (a.action === "PURGED" || a.action === "BULK_OP") return "var(--red)";
    return PRIORITY_COLORS[a.priority] || "var(--cyan)";
  };
  return (
    <div className="ts-widget">
      <div className="ts-widget-title">ACTIVITY_FEED</div>
      <div className="ts-activity-scroll">
        {activity.length === 0 ? (
          <div
            style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 10,
              color: "var(--text-dim)",
              padding: "8px 0",
            }}
          >
            NO ACTIVITY LOGGED
          </div>
        ) : (
          activity.slice(0, 10).map((a, i) => {
            const c = colorFor(a);
            return (
              <div className="ts-activity-item" key={i}>
                <div
                  className="ts-activity-dot"
                  style={{ background: c, boxShadow: `0 0 4px ${c}` }}
                />
                <div className="ts-activity-text">
                  [{a.action}] {a.title.toUpperCase()}
                </div>
                <div className="ts-activity-time">{a.time}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
