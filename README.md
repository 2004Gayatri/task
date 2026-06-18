
## 📁 Project Structure

```text
Task/
├── backend/
│   ├── config/          # MongoDB Mongoose connection config (db.js)
│   ├── models/          # Schema Models (Registration, Event, Leaderboard)
│   ├── routes/          # API Route definitions (api.js)
│   ├── package.json     # Node scripts & dependencies
│   ├── seed.js          # Database initial seed script
│   └── server.js        # Main Express server entrypoint
│
└── frontend/
    ├── public/          # Static files & battle background assets
    ├── src/
    │   ├── components/  # Core UI components (Navbar, Footer)
    │   ├── sections/    # Landing Page sections (Hero, Competitions, Journey, Sports, etc.)
    │   ├── App.jsx      # Master Layout & scroll management
    │   ├── index.css    # Cyberpunk design system, glows & transitions
    │   └── main.jsx     # Mounting root
    ├── package.json     # Vite scripts & React dependencies
    └── vite.config.js   # Vite config & API backend proxy
```
