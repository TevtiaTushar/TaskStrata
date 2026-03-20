import { SEED_TASKS } from "../constants";

export function loadState() {
  try {
    const tasks = JSON.parse(localStorage.getItem("ts_tasks") || "null");
    const activity = JSON.parse(localStorage.getItem("ts_activity") || "null");
    const nextId = parseInt(localStorage.getItem("ts_nextid") || "6");
    return {
      tasks: tasks || SEED_TASKS,
      activity: activity || [],
      nextId: tasks ? nextId : 6,
    };
  } catch {
    return { tasks: SEED_TASKS, activity: [], nextId: 6 };
  }
}

export function saveState(tasks, activity, nextId) {
  localStorage.setItem("ts_tasks", JSON.stringify(tasks));
  localStorage.setItem("ts_activity", JSON.stringify(activity.slice(0, 20)));
  localStorage.setItem("ts_nextid", String(nextId));
}
