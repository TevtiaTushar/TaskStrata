import TaskCard from "./TaskCard";
import { PRIORITY_COLORS, PRIORITY_LABELS } from "../constants";

export default function TaskSection({
  priority,
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) {
  const color = PRIORITY_COLORS[priority];
  return (
    <section className="ts-section" aria-label={`${priority} priority tasks`}>
      <div className="ts-section-head">
        <div className="ts-section-title" style={{ color }}>
          ◈ {PRIORITY_LABELS[priority]}_QUEUE
          <div
            className="ts-section-line"
            style={{
              background: `linear-gradient(90deg, ${color}, transparent)`,
            }}
          />
        </div>
        <span className="ts-section-count" style={{ color }}>
          {tasks.length}
        </span>
      </div>
      <div className="ts-task-list">
        {tasks.map((t) => (
          <TaskCard
            key={t.id}
            task={t}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </section>
  );
}
