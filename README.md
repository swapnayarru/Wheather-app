# Simple Weather App (Frontend + Backend)

## What is included
- `backend/` - Node + Express proxy to OpenWeatherMap
- `frontend/` - Static HTML/CSS/JS UI

## Setup

1. Install Node.js (v16+).
2. Get an API key from OpenWeatherMap: https://openweathermap.org/api
3. In `backend/.env` replace `YOUR_OPENWEATHERMAP_API_KEY_HERE` with your API key.

## Install backend dependencies and run
```bash
cd backend
npm install
npm start   # or npm run dev if you want nodemon
```

Server will run on http://localhost:3000

## Open frontend
- Use VS Code Live Server extension and open `frontend/index.html`, or
- Serve `frontend` folder with any static server (Live Server recommended).

## Notes
- Backend uses `node-fetch` (v3) and ESM (`"type": "module"` in package.json).
- Do not put your API key in frontend; the backend proxies requests.
