const studentUnits = {
  data: [
  {
    id: 'ISYS2014',
    name: 'Database Systems',
    schedules: [
      { day: 'Monday', startTime: 900, endTime: 1100, location: '10.9' },
      { day: 'Wednesday', startTime: 900, endTime: 1100, location: '10.9' },
    ],
    exams: [
      { date: '2025-12-03', weight: '40%' },
      { date: '2025-10-20', weight: '20%' },
    ],
  },
  {
    id: 'COMP2005',
    name: 'Computing Topics',
    schedules: [
      { day: 'Tuesday', startTime: 1100, endTime: 1300, location: '11.8' },
      { day: 'Thursday', startTime: 1100, endTime: 1300, location: '11.8' },
    ],
    exams: [
      { date: '2025-12-02', weight: '50%' },
      { date: '2025-10-18', weight: '15%' },
    ],
  },
  {
    id: 'COMP2006',
    name: 'Operating Systems',
    schedules: [
      { day: 'Monday', startTime: 1300, endTime: 1500, location: '11.22' },
      { day: 'Wednesday', startTime: 1300, endTime: 1500, location: '11.22' },
    ],
    exams: [
      { date: '2025-12-05', weight: '60%' },
      { date: '2025-10-25', weight: '10%' },
    ],
  },
]
};

module.exports = { studentUnits };
