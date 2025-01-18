const mongoose = require('mongoose');

// Drama Database Model
const DramaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  season: {
    type: String
  },
  episodes: {
    type: String
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String,
    required: true
  },
  rating: {
    type: String
  },
  genre: {
    type: String
  }

});

module.exports = Drama = mongoose.model('drama', DramaSchema);