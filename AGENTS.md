# HarleyVexx

## Overview
A React + Vite single-page app for the music artist HarleyVexx. The repo originally contained only a single Layout component file (`harleyvexx101`); the full Vite project scaffolding was added to make it runnable.

## Stack
- **React 18** with React Router v6
- **Vite 5** dev server (port 3000, bind 0.0.0.0)
- **Tailwind CSS 3** with PostCSS
- **framer-motion** for animations
- **lucide-react** for icons
- Path alias `@` → `src/`

## Running in the sandbox
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The compose service uses `node:22-slim`, bind-mounts the source, installs deps on startup, and runs `vite` with live reload. No external credentials are needed.

## Project structure
- `src/components/Layout.jsx` — main layout with nav + footer (from original `harleyvexx101` file)
- `src/components/ui/button.jsx` — shadcn-style Button component
- `src/components/GoogleVerification.jsx` — placeholder (no-op)
- `src/pages/` — Home, Catalog, Courses, Legal, Pitch
- `src/utils/index.js` — `createPageUrl` helper
- `src/lib/utils.js` — `cn` class merge helper

## Notes
- The background image and social links reference external Supabase storage and social media URLs — these are part of the original component.
- `GoogleVerification` is a no-op placeholder; add Google Search Console verification meta tags there if needed.
