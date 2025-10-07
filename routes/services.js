const express = require('express');
const router = express.Router();
const { contacts } = require('../data/general/contacts');
const { studySpaces } = require('../data/general/studySpaces');

// GET /services/contact
router.get('/services/contact', (req, res) => {
  res.json(contacts);
});

// GET /services/study-spaces
router.get('/services/study-spaces', (req, res) => {
  res.json(studySpaces);
});

module.exports = router;
