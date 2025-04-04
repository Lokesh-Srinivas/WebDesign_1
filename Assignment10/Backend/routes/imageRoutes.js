// routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Route to get images
router.get('/images', imageController.getImages);

module.exports = router;
