export default function QuickOps({
  onMarkAllDone,
  onMarkAllActive,
  onClearAll,
}) {
  return (
    <div className="ts-widget">
      <div className="ts-widget-title">QUICK_OPS</div>
      <div className="ts-quick-ops">
        <button className="ts-op-btn cyan" onClick={onMarkAllDone}>
          ▶ MARK ALL DONE
        </button>
        <button className="ts-op-btn yellow" onClick={onMarkAllActive}>
          ↺ RESET ALL
        </button>
        <button className="ts-op-btn red" onClick={onClearAll}>
          ⊗ PURGE ALL
        </button>
      </div>
    </div>
  );
}
