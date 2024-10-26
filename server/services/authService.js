const User = require('../model/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (userData) => {
  const { name, email, gender, password } = userData;

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return {
      success: false,
      message: 'User already exists',
      data: null,
    };
  }

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = await User.create({ name, email, gender, password: hashedPassword });

  // Generate JWT token
  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return {
    success: true,
    message: 'User created successfully',
    data: { id: user._id, name: user.name, email: user.email, gender: user.gender, token },
  };
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    return {
      success: false,
      message: 'Invalid credentials',
      data: null,
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      success: false,
      message: 'Invalid credentials',
      data: null,
    };
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return {
    success: true,
    message: 'Login successful',
    data: { token, user: { id: user._id, name: user.name, email: user.email, gender: user.gender } },
  };
};

module.exports = { signup, login };
