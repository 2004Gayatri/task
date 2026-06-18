const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true
  },
  status: {
    type: String,
    required: [true, 'Event status is required'],
    enum: ['Live', 'Upcoming', 'Completed'],
    default: 'Upcoming'
  },
  date: {
    type: String,
    required: [true, 'Event date/time is required']
  },
  location: {
    type: String,
    required: [true, 'Event location is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Event weight category/type is required'],
    trim: true
  },
  streamLink: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Event', EventSchema);
