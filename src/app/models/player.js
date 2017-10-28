const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
