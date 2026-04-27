const express = require("express");
const router = express.Router();

const {
  getPlayers,
  createPlayer,
  deletePlayer
} = require("../controllers/playerController");

// GET
router.get("/", getPlayers);

// POST
router.post("/", createPlayer);

// DELETE
router.delete("/:id", deletePlayer);

module.exports = router;