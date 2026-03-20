# TASK_STRATA // OPERATOR INTERFACE

> A cyberpunk-themed task management app built with React + Vite. Featuring priority queues, real-time stats, activity logging, and a fully responsive operator interface.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## Overview

TASK_STRATA is a fully client-side task manager with a retro-futuristic cyberpunk aesthetic. It runs entirely in the browser with no backend required — all data is persisted via `localStorage`. Tasks are organized into priority queues (Critical, High, Normal, Low), with live stats, a completion ring, priority distribution chart, and an activity feed that logs every action you take.

---

## Features

- **Priority Queues** — Organize tasks across Critical, High, Normal, and Low priority lanes
- **Real-time Stats** — Completion ring, priority bar chart, and progress bar update live as you work
- **Activity Feed** — Every add, edit, complete, and delete is logged with a timestamp
- **Inline Editing** — Click the edit button on any task to rename it in place
- **Persistent Storage** — All tasks and activity survive page refreshes via `localStorage`
- **Responsive Layout** — Full three-column desktop layout; collapsible drawer sidebar on mobile
- **Quick Ops** — Bulk actions to mark all done, reset all, or purge everything
- **Cyberpunk UI** — Scanline overlay, glow effects, animated completion ring, live system clock

---

## Project Structure

```
src/
├── main.jsx                  # App entry point
├── App.jsx                   # Root component, filter logic, layout
├── styles/
│   └── global.css            # All CSS custom properties and component styles
├── constants/
│   └── index.js              # Priority colors, labels, seed tasks
├── hooks/
│   ├── useClock.js           # Live system clock
│   ├── useToast.js           # Toast notification state
│   └── useTaskManager.js     # All task CRUD logic and localStorage sync
├── utils/
│   ├── helpers.js            # formatAge, escHtml utilities
│   └── storage.js            # loadState / saveState wrappers
└── components/
    ├── Header.jsx             # Top bar with logo, clock, status
    ├── Sidebar.jsx            # Left nav: filters, priority buttons, stats
    ├── AddTaskBar.jsx         # Task input with priority and tag selectors
    ├── TaskCard.jsx           # Individual task row with inline edit
    ├── TaskSection.jsx        # Priority group with header and task list
    ├── BottomBar.jsx          # Fixed status bar at the bottom
    ├── Toast.jsx              # Slide-in notification
    └── RightPanel/
        ├── index.jsx          # Right panel wrapper
        ├── CompletionRing.jsx # Animated SVG donut chart
        ├── PriorityChart.jsx  # Priority distribution bar chart
        ├── ActivityFeed.jsx   # Scrollable action log
        ├── Heatmap.jsx        # 28-cell task density grid
        └── QuickOps.jsx       # Bulk action buttons
```

---

## Prerequisites

Make sure you have the following installed before getting started:

- **Node.js** v18 or higher — [nodejs.org](https://nodejs.org)
- **npm** v9 or higher (comes bundled with Node.js)

Verify your versions by running:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-strata.git
cd task-strata
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will start a local server. Open your browser and navigate to:

```
http://localhost:5173
```

The app hot-reloads automatically — any changes you make to source files will reflect instantly in the browser without a manual refresh.

---

## Available Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the local development server                |
| `npm run build`   | Build the app for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally              |
| `npm run lint`    | Run ESLint across the project                     |

---

## Building for Production

To create an optimized production bundle:

```bash
npm run build
```

The output will be in the `dist/` folder. You can then deploy it to any static hosting service:

- **Vercel** — connect your GitHub repo and it deploys automatically
- **Netlify** — drag and drop the `dist/` folder or connect via Git
- **GitHub Pages** — use the `gh-pages` package or GitHub Actions

---

## Local Data & Storage

TASK_STRATA uses `localStorage` to persist data between sessions. No account, server, or database is needed.

The following keys are stored in your browser:

| Key           | Contents                          |
| ------------- | --------------------------------- |
| `ts_tasks`    | Array of all task objects         |
| `ts_activity` | Last 20 activity log entries      |
| `ts_nextid`   | Auto-incrementing task ID counter |

To fully reset the app, open your browser's DevTools → Application → Local Storage → delete all `ts_*` keys, then refresh the page. The app will reload with the default seed tasks.

---

## Tech Stack

| Technology                               | Purpose                                       |
| ---------------------------------------- | --------------------------------------------- |
| [React 18](https://react.dev)            | UI components and state management            |
| [Vite 5](https://vitejs.dev)             | Development server and production bundler     |
| [Google Fonts](https://fonts.google.com) | Orbitron, Share Tech Mono, Rajdhani typefaces |
| localStorage API                         | Client-side data persistence                  |

No external UI libraries, no CSS frameworks, no state management libraries — just React, vanilla CSS custom properties, and browser APIs.

---

## License

This project is open source and available under the [MIT License](LICENSE).
