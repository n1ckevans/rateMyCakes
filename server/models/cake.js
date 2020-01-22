const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
   comment: {
    type: String,
    required: true,
  },
}, { timestamps: true });

mongoose.model('Rating', RatingSchema);

const CakeSchema = new mongoose.Schema({
  baker: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  rating: [RatingSchema]
}, { timestamps: true });

mongoose.model('Cake', CakeSchema);