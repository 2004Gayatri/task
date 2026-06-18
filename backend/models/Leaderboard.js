const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
  rank: {
    type: Number,
    required: [true, 'Rank is required']
  },
  teamName: {
    type: String,
    required: [true, 'Team name is required'],
    trim: true
  },
  botName: {
    type: String,
    required: [true, 'Bot name is required'],
    trim: true
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  points: {
    type: Number,
    default: 0
  },
  tier: {
    type: String,
    enum: ['Challenger', 'Master', 'Gold', 'Silver', 'Bronze'],
    default: 'Bronze'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
