require('dotenv').config();

const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRouter = require('./routes/authRouter');
const imageRoutes = require('./routes/imageRoutes'); // Add this line
const jobRoutes = require('./routes/jobRoutes');
const cors = require('cors');

const app = express();

// Apply CORS middleware before defining routes
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests only from http://localhost:3000
// Alternatively, you can allow all origins (not recommended for production):
// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static images from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));


// Connect to MongoDB
connectDB();

// Define routes
// app.use('/user', userRoutes);
// app.use('/api/auth', authRouter);
// app.use('/api', imageRoutes); // Register the image routes
// app.use('/jobs', jobRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRouter);
app.use('/api', imageRoutes);
app.use('/api/jobs', jobRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// const mongoose = require('mongoose');
// const User = require('./models/user'); // Adjust the path as per your project structure

// const updateUserTypes = async () => {
//   try {
//     // Connect to your database
//     await mongoose.connect('mongodb://localhost:27017/test1', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     // Update all users without a `type` field to default to 'employee'
//     await User.updateMany(
//       { type: { $exists: false } }, // Match users where `type` field does not exist
//       { $set: { type: 'employee' } } // Default value
//     );

//     console.log('Updated user types successfully');
//     mongoose.disconnect();
//   } catch (error) {
//     console.error('Error updating user types:', error);
//   }
// };

// updateUserTypes();
