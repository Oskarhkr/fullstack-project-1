require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const sessionRoutes = require("./routes/sessionRoutes");
const playerRoutes = require("./routes/playerRoutes");

const app = express();

// 🔥 VIKTIGT
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/sessions", sessionRoutes);
app.use("/api/players", playerRoutes);

// CONNECT DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// START SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});