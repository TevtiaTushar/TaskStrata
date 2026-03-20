export const PRIORITY_COLORS = {
  critical: "var(--red)",
  high: "var(--magenta)",
  normal: "var(--cyan)",
  low: "var(--text-dim)",
};

export const PRIORITY_LABELS = {
  critical: "CRITICAL",
  high: "HIGH",
  normal: "NORMAL",
  low: "LOW",
};

export const SEED_TASKS = [
  {
    id: 1,
    title: "Infiltrate Arasaka Network Node",
    priority: "critical",
    tag: "NET_BREACH",
    done: false,
    created: Date.now() - 3600000,
  },
  {
    id: 2,
    title: "Extract classified data package",
    priority: "high",
    tag: "COVERT_OP",
    done: false,
    created: Date.now() - 7200000,
  },
  {
    id: 3,
    title: "Renew proxy subscription",
    priority: "normal",
    tag: "SECURITY",
    done: false,
    created: Date.now() - 10000000,
  },
  {
    id: 4,
    title: "Upgrade neural buffer RAM",
    priority: "normal",
    tag: "HARDWARE",
    done: true,
    created: Date.now() - 86400000,
  },
  {
    id: 5,
    title: "Calibrate targeting systems",
    priority: "low",
    tag: "MAINT",
    done: false,
    created: Date.now() - 50000000,
  },
];
