export default function BottomBar({ currentFilter, filteredCount }) {
  return (
    <div className="ts-bottom-bar" role="status">
      <div className="ts-bbar-side">
        <div className="ts-bbar-item">
          <div
            className="ts-bbar-indicator"
            style={{
              background: "var(--green)",
              boxShadow: "0 0 6px var(--green)",
            }}
          />
          SYS_STABLE
        </div>
        <div className="ts-bbar-item">
          <div
            className="ts-bbar-indicator"
            style={{
              background: "var(--cyan)",
              boxShadow: "0 0 6px var(--cyan)",
            }}
          />
          DATA_ENCRYPTED
        </div>
        <div className="ts-bbar-item always">
          VIEW: {currentFilter.toUpperCase()}
        </div>
      </div>
      <div className="ts-bbar-side">
        <div className="ts-bbar-item always">{filteredCount} TASKS LOADED</div>
        <div className="ts-bbar-item">BUILD: 1.0.0_STABLE</div>
      </div>
    </div>
  );
}
