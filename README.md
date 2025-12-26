#  Habit Mood Tracker  
A Progressive Web App to build habits, track emotions, and reflect daily.

#  Overview
Habit Mood Tracker is a modern, installable Progressive Web App (PWA) designed to help users:

- Build healthy daily habits  
- Track their mood visually  
- Reflect through journaling  
- Maintain streaks and consistency  

The app focuses on **simplicity, calm UI, and meaningful daily engagement**.

# 🚀 Live Demo

🔗 Deployed App:
https://euphonious-sunflower-096ccf.netlify.app

👉 Users can install it on desktop and mobile like a native app.


# 📱 Key Features

# 🔐 Authentication (Clerk)
- Secure email + OTP based authentication
- Session persistence (no repeated OTPs)
- Logout via profile menu
- Production-ready auth flow

# 😊 Mood Tracking
- Select daily mood using emojis
- Mood-based motivational quote
- Mood history stored per day (local persistence)

# ✅ Habit Management
- Default habits shown for first-time users
- Add new habits anytime
- Mark habits as completed (✔)
- Delete habits (❌)
- Daily automatic reset of habit completion

# ✍️ Daily Reflection
- Journal your thoughts every day
- Saved locally per date
- Encourages mindfulness and self-reflection

# 🔥 Streak Logic
- Tracks daily engagement
- Resets cleanly each day
- Visual feedback for consistency
- 
# 📦 Progressive Web App (PWA)
- Installable on **desktop & mobile**
- Offline-ready structure
- Custom app icon & manifest
- App opens in standalone window
-

# 🛠 Tech Stack

Category                        Technology 

 Frontend                       React + Vite 
 Styling                        Tailwind CSS 
 Authentication                 Clerk 
 State Persistence              LocalStorage 
 Deployment                     Netlify          
 PWA                            Web App Manifest + Service Worker 


# 🧠 Architecture Highlights

- Component-based React architecture
- Client-side routing
- Secure auth wrapper around dashboard
- Local storage for fast, backend-free persistence
- Clean separation of UI, state, and logic


#📂 Project Structure
frontend/ 
├── public/ 
  ├── manifest.json  
  ├── icon-192.png 
  ├── icon-512.png 
  └── sw.js
├── src/   
  ├── pages/  
   ├── Landing.jsx 
   ├── Login.jsx 
   ├── Register.jsx 
   └── Dashboard.jsx 
├── App.jsx
|── main.jsx 


# 🧪 How to Run Locally
```bash
npm install
npm run dev


🎯 What This Project Demonstrates
Real-world authentication handling
PWA concepts & installability
Clean UX for habit-forming apps
State management without heavy backend
Production deployment workflow


🌟 Future Enhancements
Cloud database (Firebase / Supabase)
Cross-device sync
Analytics & insights
Habit reminders (notifications)
Calendar-based streak tracking


📜 License
This project is open-source and free to use for learning and inspiration.

