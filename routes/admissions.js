const express = require('express');
const router = express.Router();
const { applicationStatus } = require('../data/admissions/applicationStatus');

// GET /applications/:studentId/status
router.get('/applications/:studentId/status', (req, res) => {
  const studentId = parseInt(req.params.studentId);
  if (applicationStatus.data.studentId === studentId) return res.json(applicationStatus);
  res.status(404).json({ message: 'Application not found' });
});

module.exports = router;
