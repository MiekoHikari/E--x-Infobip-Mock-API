const express = require('express');
const router = express.Router();
const { programs } = require('../data/programs/programs');

// GET /programs
router.get('/programs', (req, res) => {
  const levels = req.query.programLevel;
  if (!levels) return res.json(programs);

  const filtered = programs.data.filter((p) => {
    if (Array.isArray(levels)) return levels.includes(p.programLevel);
    return levels === p.programLevel;
  });
  res.json({ data: filtered });
});

// GET /programs/:programId
router.get('/programs/:programId', (req, res) => {
  const program = programs.data.find((p) => p.programId === req.params.programId);
  if (program) {
    return res.json(program);
  }
  res.status(404).json({ message: 'Program not found' });
});

module.exports = router;
