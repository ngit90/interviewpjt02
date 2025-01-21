const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
const router = express.Router();

// Login API
router.post('/login', async (req, res) => {

  const { email, password } = req.body;
  //console.log(email, password);
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    //console.log(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// POST route for signup
router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, contactNo, whatsappNo, email, state, referralCode, password, role, status } = req.body;
        //console.log(firstName, lastName, contactNo, whatsappNo, email, state, referralCode, password, role, status);
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
      const user = new User({ firstName, lastName, contactNo, whatsappNo, email, state, referralCode, password, role, status });
      await user.save();
      res.status(201).send('User Registered Successfully');
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = router;
