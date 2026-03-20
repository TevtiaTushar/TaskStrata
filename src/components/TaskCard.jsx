import { useState, useRef, useEffect } from "react";
import { PRIORITY_COLORS } from "../constants";
import { formatAge } from "../utils/helpers";

export default function TaskCard({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState(task.title);
  const inputRef = useRef(null);
  const color = PRIORITY_COLORS[task.priority];

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const finishEdit = () => {
    const v = editVal.trim();
    if (v && v !== task.title) onEdit(task.id, v);
    setEditing(false);
  };

  return (
    <div
      className={`ts-task-card priority-${task.priority} ${task.done ? "done" : ""}`}
    >
      <div
        className={`ts-task-check ${task.done ? "checked" : ""}`}
        onClick={() => onToggle(task.id)}
        role="checkbox"
        aria-checked={task.done}
        tabIndex={0}
        onKeyDown={(e) => e.key === " " && onToggle(task.id)}
      >
        {task.done ? "✓" : ""}
      </div>
      <div className="ts-task-body">
        {editing ? (
          <input
            ref={inputRef}
            className="ts-edit-input"
            value={editVal}
            onChange={(e) => setEditVal(e.target.value)}
            onBlur={finishEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") finishEdit();
              if (e.key === "Escape") setEditing(false);
            }}
          />
        ) : (
          <div className="ts-task-title">{task.title}</div>
        )}
        <div className="ts-task-meta">
          <span
            className="ts-task-tag"
            style={{ color, borderColor: `${color}40` }}
          >
            {task.tag}
          </span>
          <span
            className="ts-task-tag"
            style={{ color, borderColor: `${color}30` }}
          >
            {task.priority.toUpperCase()}
          </span>
          <span className="ts-task-time">{formatAge(task.created)}</span>
        </div>
      </div>
      <div className="ts-task-actions">
        <button
          className="ts-task-action-btn edit"
          onClick={() => {
            setEditVal(task.title);
            setEditing(true);
          }}
        >
          ✎
        </button>
        <button
          className="ts-task-action-btn del"
          onClick={() => onDelete(task.id)}
        >
          ⊗
        </button>
      </div>
    </div>
  );
}
