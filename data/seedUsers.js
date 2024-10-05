const mongoose = require('mongoose');
const User = require('../models/userModel');
const connectDB = require('../config/db');

connectDB();

const seedUsers = async () => {
  const users = [
    {
      user_id: 'user1',
      expenses: 100,
      vibe: 'Adventure',
      reviews: ['Great place for hiking', 'Loved the mountains!'],
      instagram_photos: ['photo1.jpg', 'photo2.jpg'],
      previous_destinations: ['Himalayas', 'Rocky Mountains'],
      favorite_activities: ['Hiking', 'Climbing'],
    },
    {
      user_id: 'user2',
      expenses: 200,
      vibe: 'Relaxation',
      reviews: ['Beautiful beaches', 'Peaceful stay'],
      instagram_photos: ['photo3.jpg', 'photo4.jpg'],
      previous_destinations: ['Maldives', 'Bali'],
      favorite_activities: ['Swimming', 'Sunbathing'],
    }
  ];

  try {
    await User.insertMany(users);
    console.log('Users seeded successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedUsers();
