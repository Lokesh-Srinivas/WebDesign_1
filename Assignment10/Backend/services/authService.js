const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return null; // User does not exist
    }

    console.log("User found:", user);

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    console.log("Password valid:", isPasswordValid);

    if (!isPasswordValid) {
      return null; // Password does not match
    }

    // Generate JWT token with role included in the payload
    const token = jwt.sign({ id: user._id, role: user.role }, 'secret_key', { expiresIn: '1h' });

     // Log the token and role before returning
     console.log("Returning from authenticateUser:", { token, role: user.role });
     
    // Return both token and role
    return { token, role: user.role };
  } catch (error) {
    console.error("Error in authenticateUser:", error);
    throw error; // Propagate error back to controller
  }
};
