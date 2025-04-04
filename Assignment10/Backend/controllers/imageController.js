// controllers/imageController.js
const fs = require('fs');
const path = require('path');

exports.getImages = (req, res) => {
  const imagesDir = path.join(__dirname, '../images');
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading image directory' });
    }
    
    // Map files to include names and URLs
    const images = files.map(file => ({
      name: file.split('.')[0], // Use filename without extension as name
      url: `http://localhost:5000/images/${file}`
    }));

    res.json(images);
  });
};
