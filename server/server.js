const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const sessionRoutes = require("./routes/sessionRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/sessions", sessionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});