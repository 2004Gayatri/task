const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: [true, 'Team name is required'],
    trim: true
  },
  teamLeader: {
    type: String,
    required: [true, 'Team leader name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  botName: {
    type: String,
    required: [true, 'Bot name is required'],
    trim: true
  },
  weightCategory: {
    type: String,
    required: [true, 'Weight category is required'],
    enum: ['Featherweight (15kg)', 'Middleweight (30kg)', 'Heavyweight (60kg)', 'RoboSoccer', 'Autonomous/Others']
  },
  experience: {
    type: String,
    required: [true, 'Experience level is required'],
    enum: ['Beginner', 'Intermediate', 'Professional']
  },
  message: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
