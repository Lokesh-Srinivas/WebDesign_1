const express = require('express');
const {getJobs, createJob } = require('../controllers/jobController');
const router = express.Router();

// Route to get all jobs
router.get('/getAll', getJobs);

// Route for creating a job
router.post('/create', createJob);

module.exports = router;
