import { useState, useEffect, useCallback } from "react";
import { loadState, saveState } from "../utils/storage";

export function useTaskManager() {
  const init = loadState();
  const [tasks, setTasks] = useState(init.tasks);
  const [activity, setActivity] = useState(init.activity);
  const [nextId, setNextId] = useState(init.nextId);

  useEffect(() => {
    saveState(tasks, activity, nextId);
  }, [tasks, activity, nextId]);

  const logActivity = useCallback((action, title, priority) => {
    const entry = {
      action,
      title: title.substring(0, 25),
      priority,
      time: new Date().toLocaleTimeString("en", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
    };
    setActivity((prev) => [entry, ...prev.slice(0, 19)]);
  }, []);

  const addTask = useCallback(
    ({ title, priority, tag }) => {
      const task = {
        id: nextId,
        title,
        priority,
        tag: tag || "TASK",
        done: false,
        created: Date.now(),
      };
      setTasks((prev) => [task, ...prev]);
      setNextId((n) => n + 1);
      logActivity("INJECTED", title, priority);
    },
    [nextId, logActivity],
  );

  const toggleTask = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((t) => {
          if (t.id !== id) return t;
          logActivity(t.done ? "REOPENED" : "COMPLETED", t.title, t.priority);
          return { ...t, done: !t.done };
        }),
      );
    },
    [logActivity],
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prev) => {
        const t = prev.find((t) => t.id === id);
        if (t) logActivity("PURGED", t.title, t.priority);
        return prev.filter((t) => t.id !== id);
      });
    },
    [logActivity],
  );

  const editTask = useCallback(
    (id, newTitle) => {
      setTasks((prev) =>
        prev.map((t) => {
          if (t.id !== id) return t;
          logActivity("MODIFIED", newTitle, t.priority);
          return { ...t, title: newTitle };
        }),
      );
    },
    [logActivity],
  );

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((t) => !t.done));
  }, []);

  const markAllDone = useCallback(() => {
    setTasks((prev) => prev.map((t) => ({ ...t, done: true })));
    logActivity("BULK_OP", "ALL TASKS MARKED DONE", "normal");
  }, [logActivity]);

  const markAllActive = useCallback(() => {
    setTasks((prev) => prev.map((t) => ({ ...t, done: false })));
  }, []);

  const clearAll = useCallback(() => {
    setTasks([]);
  }, []);

  return {
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
  };
}
