const express = require('express');
const router = express.Router();
const { student } = require('../data/student/student');
const { studentUnits } = require('../data/student/studentUnits');
const { studentFinances } = require('../data/student/studentFinances');
const { studentAppointment } = require('../data/student/appointment');
const { studentPayment } = require('../data/student/payment');

router.get('/students/:studentId', (req, res) => {
  if (req.params.studentId === student.id) return res.json(student);
  res.status(404).json({ message: 'Student not found' });
});

// GET /students/:studentId/units
router.get('/students/:studentId/units', (req, res) => {
  if (req.params.studentId === '12345678') return res.json(studentUnits);
  res.status(404).json({ message: 'Student not found' });
});

// GET /students/:studentId/finances
router.get('/students/:studentId/finances', (req, res) => {
  if (req.params.studentId === '12345678') return res.json(studentFinances);
  res.status(404).json({ message: 'Student not found' });
});

// POST /students/:studentId/appointments
router.post('/students/:studentId/appointments', (req, res) => {
  if (req.params.studentId === '12345678') return res.status(201).json(studentAppointment);
  res.status(404).json({ message: 'Student not found' });
});

// POST /students/:studentId/finances/generate
router.post('/students/:studentId/finances/generate', (req, res) => {
  if (req.params.studentId === '12345678') return res.status(201).json(studentPayment);
  res.status(404).json({ message: 'Student not found' });
});

module.exports = router;
