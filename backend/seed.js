const mongoose = require('mongoose');
require('dotenv').config();

const Event = require('./models/Event');
const Leaderboard = require('./models/Leaderboard');

const sampleEvents = [
  {
    title: 'Bengaluru Regionals - Episode 14',
    status: 'Live',
    date: 'June 17, 2026 at 10:30 AM',
    location: 'Bengaluru Indoor Stadium, KA',
    category: 'Featherweight (15kg) Combat',
    streamLink: 'https://youtube.com/live/placeholder1',
    description: 'The ultimate regional battle where India\'s top 15kg featherweight combat bots clash for a spot in the National finals.'
  },
  {
    title: 'Delhi National Championship',
    status: 'Upcoming',
    date: 'July 12, 2026 at 2:00 PM',
    location: 'Pragati Maidan, New Delhi',
    category: 'Middleweight (30kg) Combat',
    streamLink: '',
    description: 'National combat championships bringing together heavy-hitters from all across the subcontinent.'
  },
  {
    title: 'Mumbai RoboSoccer Open',
    status: 'Upcoming',
    date: 'August 05, 2026 at 9:00 AM',
    location: 'Nesco Center, Mumbai',
    category: 'RoboSoccer (Autonomous & Manual)',
    streamLink: '',
    description: 'Speed, agility, and algorithms. Watch teams compete in a high-octane autonomous soccer tournament.'
  },
  {
    title: 'Hyderabad Tech Expo - Shield Battle',
    status: 'Completed',
    date: 'May 10, 2026',
    location: 'HITEX Exhibition Center, Hyderabad',
    category: 'Featherweight (15kg) Combat',
    streamLink: 'https://youtube.com/watch?v=placeholder2',
    description: 'A defensive shield-bot showcase. Ares dominated the arena against defensive heavyweights.'
  }
];

const sampleLeaderboard = [
  {
    rank: 1,
    teamName: 'Team Ares Robotics',
    botName: 'ARES',
    wins: 14,
    losses: 1,
    points: 280,
    tier: 'Challenger'
  },
  {
    rank: 2,
    teamName: 'Typhoon Warriors',
    botName: 'TYPHOON',
    wins: 12,
    losses: 3,
    points: 240,
    tier: 'Master'
  },
  {
    rank: 3,
    teamName: 'Inferno Tech',
    botName: 'HELLFIRE',
    wins: 11,
    losses: 4,
    points: 220,
    tier: 'Master'
  },
  {
    rank: 4,
    teamName: 'Viper Bots',
    botName: 'VIPER',
    wins: 9,
    losses: 5,
    points: 180,
    tier: 'Gold'
  },
  {
    rank: 5,
    teamName: 'Cyber Knights',
    botName: 'EXCALIBUR',
    wins: 8,
    losses: 6,
    points: 160,
    tier: 'Gold'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/botleague');
    console.log('Connected to MongoDB for seeding...');

    // Clear existing
    await Event.deleteMany();
    await Leaderboard.deleteMany();
    console.log('Cleared existing database entries.');

    // Seed Events
    await Event.insertMany(sampleEvents);
    console.log('Successfully seeded events.');

    // Seed Leaderboard
    await Leaderboard.insertMany(sampleLeaderboard);
    console.log('Successfully seeded leaderboard standings.');

    console.log('Seeding finished successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDatabase();
