const authService = require('../services/authService');

exports.login = async (req, res) => {
  const { email, password } = req.body; // Ensure these fields match the request payload
  console.log("Login attempt:", email, password); // Log input data for debugging
  try {
    const result = await authService.authenticateUser(email, password);


    // Log the result to see what's returned
    console.log("Result from authenticateUser:", result);
    
    if (result) {
      const { token, role } = result;
      res.status(200).json({ message: 'Login successful', token, role });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: 'Server error' });
  }
};
