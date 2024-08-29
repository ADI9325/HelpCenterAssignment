require('dotenv').config(); // Import and configure dotenv

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware
const cardRoutes = require('./routes/cards'); // Import your card routes

const app = express();
const PORT = process.env.PORT || 3000;

// Apply CORS middleware to allow requests from other origins
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3001', // Development environment
      'https://helpcenterfrontend.onrender.com' // Production environment
    ];
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type'], // Specify allowed headers
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/api', cardRoutes); // Use card routes

app.get('/ping', (req, res) => {
  res.send('Server is running!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, // optional in new versions
  useUnifiedTopology: true, // optional in new versions
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
