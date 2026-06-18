const express = require('express');
const router = express.Router();

const Registration = require('../models/Registration');
const Event = require('../models/Event');
const Leaderboard = require('../models/Leaderboard');

// @route   POST /api/register
// @desc    Register a new team/bot
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { teamName, teamLeader, email, phone, botName, weightCategory, experience, message } = req.body;

    // Validation
    if (!teamName || !teamLeader || !email || !phone || !botName || !weightCategory || !experience) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const registration = new Registration({
      teamName,
      teamLeader,
      email,
      phone,
      botName,
      weightCategory,
      experience,
      message
    });

    await registration.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful! See you in the arena.',
      data: registration
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// @route   GET /api/events
// @desc    Get all events
// @access  Public
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json({ success: true, count: events.length, data: events });
  } catch (error) {
    console.error('Fetch events error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/leaderboard
// @desc    Get leaderboard rankings
// @access  Public
router.get('/leaderboard', async (req, res) => {
  try {
    const standings = await Leaderboard.find().sort({ rank: 1 });
    res.json({ success: true, count: standings.length, data: standings });
  } catch (error) {
    console.error('Fetch leaderboard error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/stats
// @desc    Get quick stats (total teams, live battles)
// @access  Public
router.get('/stats', async (req, res) => {
  try {
    const totalRegistered = await Registration.countDocuments();
    const liveEvents = await Event.countDocuments({ status: 'Live' });
    const totalEvents = await Event.countDocuments();
    
    res.json({
      success: true,
      data: {
        totalBots: totalRegistered + 42, // Add some baseline mock registered count for aesthetic numbers
        liveBattles: liveEvents,
        totalEvents: totalEvents + 15
      }
    });
  } catch (error) {
    console.error('Fetch stats error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
