const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  image: String,
  url: String,
  description: String,
  languages: [String]
});

module.exports = mongoose.model('Project', projectSchema);
