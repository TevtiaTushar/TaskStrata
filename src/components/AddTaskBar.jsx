import { useState } from "react";

export default function AddTaskBar({ onAdd }) {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [priority, setPriority] = useState("normal");
  const [focused, setFocused] = useState(false);

  const handleAdd = () => {
    if (!title.trim()) return;
    onAdd({ title: title.trim(), priority, tag: tag.trim().toUpperCase() });
    setTitle("");
    setTag("");
  };

  return (
    <div className={`ts-add-bar ${focused ? "focused" : ""}`}>
      <div className="ts-add-prefix">[INPUT] &gt;</div>
      <input
        className="ts-task-input"
        type="text"
        placeholder="INITIALIZE NEW TASK STRING..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-label="New task"
      />
      <div className="ts-add-options">
        <select
          className="ts-priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="normal">NORMAL</option>
          <option value="critical">CRITICAL</option>
          <option value="high">HIGH</option>
          <option value="low">LOW</option>
        </select>
        <input
          className="ts-tag-input"
          type="text"
          placeholder="TAG"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          aria-label="Tag"
        />
        <button className="ts-add-btn" onClick={handleAdd}>
          + INJECT
        </button>
      </div>
    </div>
  );
}
