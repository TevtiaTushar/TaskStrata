import CompletionRing from "./CompletionRing";
import PriorityChart from "./PriorityChart";
import ActivityFeed from "./ActivityFeed";
import Heatmap from "./Heatmap";
import QuickOps from "./QuickOps";

export default function RightPanel({
  tasks,
  activity,
  onMarkAllDone,
  onMarkAllActive,
  onClearAll,
}) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const critical = tasks.filter(
    (t) => t.priority === "critical" && !t.done,
  ).length;
  const counts = {
    critical: tasks.filter((t) => t.priority === "critical").length,
    high: tasks.filter((t) => t.priority === "high").length,
    normal: tasks.filter((t) => t.priority === "normal").length,
    low: tasks.filter((t) => t.priority === "low").length,
  };
  return (
    <aside className="ts-panel-right" aria-label="Stats and quick actions">
      <CompletionRing total={total} done={done} critical={critical} />
      <PriorityChart counts={counts} />
      <ActivityFeed activity={activity} />
      <Heatmap />
      <QuickOps
        onMarkAllDone={onMarkAllDone}
        onMarkAllActive={onMarkAllActive}
        onClearAll={onClearAll}
      />
    </aside>
  );
}
