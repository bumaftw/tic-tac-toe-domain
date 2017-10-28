const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moveSchema = Schema({
  player: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  coordinates: [{
    type: Number,
  }],
});

const matchSchema = Schema({
  player1: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  player2: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  finished: {
    type: Boolean,
    default: false,
  },
  winner: {
    type: Schema.Types.ObjectId,
    default: null,
  },
  moves: [moveSchema],
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
