const express = require("express");
const sessionRoutes = require("./routes/sessionRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/sessions", sessionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});