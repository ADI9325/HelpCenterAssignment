const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const cardSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
