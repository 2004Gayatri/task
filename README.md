# BotLeague - MERN Combat Robotics Web Application

An exceptionally designed, high-fidelity MERN (MongoDB, Express, React, Node) stack application for **BotLeague (India's Ultimate Robotics Arena)**.

The layout features a futuristic dark/neon combat gaming aesthetic with custom SVGs, high-quality images, interactive timelines, leaderboards, and a fully functional registration system integrated directly with MongoDB.

---

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

---

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **MongoDB Local Community Server** (running on default port `27017`) or a **MongoDB Atlas URI**

---

## 🚀 Running the Project

Follow these steps to set up and run the application:

### Step 1: Install & Set Up the Backend
1. Open your terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the server dependencies:
   ```bash
   npm install
   ```
3. (Optional) Create a `.env` file in the `backend/` folder to customize your PORT or MongoDB URI:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/botleague
   ```

### Step 2: Seed the Database
To populate the events (live and upcoming) and the leaderboard ranks with the initial dataset:
```bash
npm run seed
```
*You should see a message confirming successful seeding.*

### Step 3: Run the Backend Server
Start the Express server in development/watch mode using nodemon:
```bash
npm run dev
```
*The server will run on `http://localhost:5000`.*

### Step 4: Install & Run the Frontend
1. Open a new terminal window and navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install client-side dependencies (Vite, React, Lucide icons):
   ```bash
   npm install
   ```
3. Start the Vite React client:
   ```bash
   npm run dev
   ```
4. Open the browser and visit:
   `http://localhost:5173`

---

## 🦾 Key Features

1. **Brand Navbar**: Custom React-SVG logo of **BOTLEAGUE** with mobile drawer navigation.
2. **Dynamic Hero Section**: Premium overlay dark gradient over clashing combat bots, a pulsating status badge, and call-to-actions.
3. **Double Column Arena Section**: Live/Upcoming tournament schedule (CORS connected to backend) side-by-side with a stylized Top 3 podium national leaderboard.
4. **Competitor Road Map**: Interactive journey stepper highlighting builder progression phases.
5. **Specs Panel**: Technical breakdown of battle cages, bulletproof safety Lexan, and arena hazard traps.
6. **Join Form**: Asynchronous registration form validating team details and saving inputs to MongoDB.
