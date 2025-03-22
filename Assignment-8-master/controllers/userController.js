const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Create user
exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    // Email and password validations
    if (!fullName || !email || !password) return res.status(400).json({ message: 'All fields are required' });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
    if (!emailRegex.test(email)) return res.status(400).json({ message: 'Invalid email. Must contain "@" and end with ".com"' });
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) return res.status(400).json({ message: 'Password too weak. Must be at least 8 characters long, contain at least one letter, one number, and one special character.' });
    const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });
    const user = new User({ fullName, email, password });
    await user.save();
    res.status(201).json({ message: 'User created', userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update user details
exports.updateUser = async (req, res) => {
  try {
    const { email, fullName, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (fullName) user.fullName = fullName;
    if (password) user.password = await bcrypt.hash(password, 10);
    
    await user.save();
    res.status(200).json({ message: 'User updated', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOneAndDelete({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('fullName email password');
    res.status(200).json({
      message: 'All users retrieved successfully',
      users: users
  });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
