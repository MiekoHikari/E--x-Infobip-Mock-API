const express = require('express');
const router = express.Router();
const { programs } = require('../data/programs/programs');
const { programDetail } = require('../data/programs/programDetail');

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
  if (req.params.programId === 'IT-UG-2025') return res.json(programDetail);
  res.status(404).json({ message: 'Program not found' });
});

module.exports = router;
