const User = require('../models/userModel');

// Predefined destinations based on user vibe
const destinations = {
  Adventure: ['Mountain Hiking', 'River Rafting', 'Zip Lining'],
  Relaxation: ['Spa Day', 'Beach', 'Yoga Retreat'],
};

const generateItinerary = async (req, res) => {
  const { user_id } = req.body;

  try {
    // Fetch user from MongoDB
    const user = await User.findOne({ user_id });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { vibe } = user;
    const suggestedActivities = destinations[vibe] || [];

    const itinerary = suggestedActivities.map((activity, index) => ({
      day: index + 1,
      activity,
      cost: Math.floor(Math.random() * 100) + 50, // Random cost generation
    }));

    res.json({
      user_id: user.user_id,
      itinerary,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { generateItinerary };
