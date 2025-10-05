const express = require('express');
const router = express.Router();
const { contacts } = require('../data/general/contacts');

// GET /services/contact
router.get('/services/contact', (req, res) => {
  res.json(contacts);
});

module.exports = router;
