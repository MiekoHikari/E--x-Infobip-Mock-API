const express = require('express');
const router = express.Router();
const { applicationStatus } = require('../data/admissions/applicationStatus');

// GET /applications/:applicationId/status
router.get('/applications/:applicationId/status', (req, res) => {
  if (req.params.applicationId === 'APP-001') return res.json(applicationStatus);
  res.status(404).json({ message: 'Application not found' });
});

module.exports = router;
