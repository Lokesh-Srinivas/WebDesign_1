const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: Number, required: true },
  //postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to admin user
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);
