const User = require('../models/user'); 
const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require('../controllers/userController');

// User routes
router.post('/create', createUser);
router.put('/edit', updateUser);
router.delete('/delete', deleteUser);
router.get('/getAll', getAllUsers);

router.post('/uploadImage', upload.single('image'), async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (!req.file) return res.status(400).json({ message: 'File is needed to be uploaded' });

    user.imagePath = req.file.path;
    await user.save();

    res.status(200).json({ message: 'Image uploaded', filePath: user.imagePath });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
