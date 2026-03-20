import { useState } from "react";
import { useTaskManager } from "./hooks/useTaskManager";
import { useToast } from "./hooks/useToast";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddTaskBar from "./components/AddTaskBar";
import TaskSection from "./components/TaskSection";
import RightPanel from "./components/RightPanel";
import BottomBar from "./components/BottomBar";
import Toast from "./components/Toast";

export default function App() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toast = useToast();

  const {
    tasks,
    activity,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    clearCompleted,
    markAllDone,
    markAllActive,
    clearAll,
  } = useTaskManager();

  const handleAdd = (data) => {
    if (!data.title) {
      toast.show("⚠ INPUT STRING EMPTY");
      return;
    }
    addTask(data);
    toast.show("✓ TASK INJECTED: " + data.title.substring(0, 30).toUpperCase());
  };

  const handleToggle = (id) => {
    const t = tasks.find((t) => t.id === id);
    toggleTask(id);
    toast.show(t?.done ? "↺ TASK REOPENED" : "✓ TASK RESOLVED");
  };

  const handleClearAll = () => {
    if (!window.confirm("CONFIRM: PURGE ALL TASKS?")) return;
    clearAll();
    toast.show("⊗ ALL DATA PURGED");
  };

  const filteredTasks = (() => {
    switch (currentFilter) {
      case "active":
        return tasks.filter((t) => !t.done);
      case "done":
        return tasks.filter((t) => t.done);
      case "critical":
      case "high":
      case "normal":
      case "low":
        return tasks.filter((t) => t.priority === currentFilter);
      default:
        return tasks;
    }
  })();

  const grouped = {};
  filteredTasks.forEach((t) => {
    if (!grouped[t.priority]) grouped[t.priority] = [];
    grouped[t.priority].push(t);
  });

  return (
    <div className="ts-root">
      <Header onMenuToggle={() => setSidebarOpen((o) => !o)} />
      <div
        className={`ts-sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <div className="ts-layout">
        <Sidebar
          tasks={tasks}
          currentFilter={currentFilter}
          setFilter={(f) => {
            setCurrentFilter(f);
            setSidebarOpen(false);
          }}
          clearCompleted={clearCompleted}
          isOpen={sidebarOpen}
        />
        <main className="ts-main" aria-label="Task list">
          <AddTaskBar onAdd={handleAdd} />
          {filteredTasks.length === 0 ? (
            <div className="ts-empty">
              // NO TASKS MATCH CURRENT FILTER //
              <br />
              <span style={{ color: "var(--cyan)", opacity: 0.5 }}>
                INJECT NEW TASK_STRING TO PROCEED
              </span>
            </div>
          ) : (
            ["critical", "high", "normal", "low"]
              .filter((p) => grouped[p])
              .map((p) => (
                <TaskSection
                  key={p}
                  priority={p}
                  tasks={grouped[p]}
                  onToggle={handleToggle}
                  onDelete={deleteTask}
                  onEdit={editTask}
                />
              ))
          )}
        </main>
        <RightPanel
          tasks={tasks}
          activity={activity}
          onMarkAllDone={() => {
            markAllDone();
            toast.show("✓ ALL TASKS RESOLVED");
          }}
          onMarkAllActive={() => {
            markAllActive();
            toast.show("↺ ALL TASKS REOPENED");
          }}
          onClearAll={handleClearAll}
        />
      </div>
      <BottomBar
        currentFilter={currentFilter}
        filteredCount={filteredTasks.length}
      />
      <Toast msg={toast.msg} visible={toast.visible} />
    </div>
  );
}
