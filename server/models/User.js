const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const userSchema = new mongoose.Schema({
  firstName:  { type: String, required: true },
  lastName:  { type: String, required: true },
  contactNo:  { type: Number, required: true },
  whatsappNo: Number,
  email:  { type: String, required: true, unique: true },
  state: String,
  referralCode: String,
  password:  { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  status: { type: String, enum: ['active', 'block'], default: 'active' },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
