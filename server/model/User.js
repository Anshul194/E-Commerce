// models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
}, { timestamps: true });

// Creating an index on email for faster searches
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
