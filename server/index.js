const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const authRoutes = require('./routes/auth');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Initialize the app
const app = express();
const dburl = process.env.MONGO_URI;
// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' })); 

// Routes
app.use('/api', authRoutes);

// Connect to MongoDB
mongoose.connect(dburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }).catch((error) => console.error('MongoDB connection error:', error));


