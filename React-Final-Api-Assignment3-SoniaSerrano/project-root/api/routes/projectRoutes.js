const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
