const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true
  },
  expenses: Number,
  vibe: String,
  reviews: [String],
  instagram_photos: [String],
  previous_destinations: [String],
  favorite_activities: [String]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
