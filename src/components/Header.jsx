import { useClock } from "../hooks/useClock";

export default function Header({ onMenuToggle }) {
  const clock = useClock();
  return (
    <header className="ts-header">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          className="ts-mobile-nav-toggle"
          onClick={onMenuToggle}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <div className="ts-logo">
          TASK<span className="ts-logo-sep">_</span>STRATA
        </div>
      </div>
      <div className="ts-header-right">
        <div className="ts-sys-stat">
          <span className="label">OPERATOR</span>
          <span className="val">UNIT_01</span>
        </div>
        <div className="ts-sys-stat">
          <span className="label">SYS_TIME</span>
          <span className="val">{clock}</span>
        </div>
        <div className="ts-sys-stat">
          <span className="label">NET_STATUS</span>
          <span className="val" style={{ color: "var(--green)" }}>
            LINKED ●
          </span>
        </div>
        <div className="ts-status-dot" />
      </div>
    </header>
  );
}
