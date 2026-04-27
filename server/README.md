# Football Training Tracker

A full-stack web application for managing football training sessions, players, and attendance.

---

## Features

- Create and manage players
- Create training sessions
- Assign players to sessions
- Track attendance for each player
- Delete players and sessions
- View all data in real-time

---

## Tech Stack

**Frontend**
- React (Vite)

**Backend**
- Node.js
- Express

**Database**
- MongoDB Atlas
- Mongoose

---

## 🗄️ Database Structure

The application uses 3 main collections:

### 1. Player
- name
- age
- position

### 2. Session
- title
- date
- focusArea
- intensityLevel
- players (array of Player ObjectIds)

### 3. Attendance
- player (reference to Player)
- session (reference to Session)
- status (Present, Absent, Late, Injured)
- rating
- notes

---

## Relationships

- A **Session** can have multiple Players
- A **Player** can belong to multiple Sessions
- **Attendance** links Player and Session together

---

## Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/fullstack-project-1.git
cd fullstack-project-1