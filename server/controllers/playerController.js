const Player = require("../models/Player");
const Session = require("../models/Session");

// GET ALL PLAYERS
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE PLAYER
exports.createPlayer = async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE PLAYER
exports.deletePlayer = async (req, res) => {
  try {
    const playerId = req.params.id;

    await Session.updateMany(
      {},
      { $pull: { players: playerId } }
    );

    const deletedPlayer = await Player.findByIdAndDelete(playerId);

    if (!deletedPlayer) {
      return res.status(404).json({ error: "Player not found" });
    }

    res.status(200).json({
      message: "Player deleted and removed from sessions"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};