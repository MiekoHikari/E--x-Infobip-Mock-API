const studySpaces = {
  data: [
    {
      date: '2025-10-08',
      rooms: [
        {
          roomNumber: '10.4',
          capacity: 6,
          availableSlots: [
            { startTime: '09:00', endTime: '10:00' },
            { startTime: '10:00', endTime: '11:00' },
            { startTime: '13:00', endTime: '14:00' },
            { startTime: '15:00', endTime: '16:00' },
          ],
        },
        {
          roomNumber: '10.3',
          capacity: 4,
          availableSlots: [
            { startTime: '09:00', endTime: '10:00' },
            { startTime: '11:00', endTime: '12:00' },
            { startTime: '14:00', endTime: '15:00' },
            { startTime: '16:00', endTime: '17:00' },
          ],
        },
        {
          roomNumber: '10.2',
          capacity: 8,
          availableSlots: [
            { startTime: '10:00', endTime: '11:00' },
            { startTime: '11:00', endTime: '12:00' },
            { startTime: '13:00', endTime: '14:00' },
            { startTime: '15:00', endTime: '16:00' },
          ],
        },
      ],
    },
    {
      date: '2025-10-09',
      rooms: [
        {
          roomNumber: '10.1',
          capacity: 6,
          availableSlots: [
            { startTime: '09:00', endTime: '10:00' },
            { startTime: '12:00', endTime: '13:00' },
            { startTime: '14:00', endTime: '15:00' },
            { startTime: '16:00', endTime: '17:00' },
          ],
        },
        {
          roomNumber: 'B103',
          capacity: 10,
          availableSlots: [
            { startTime: '10:00', endTime: '11:00' },
            { startTime: '11:00', endTime: '12:00' },
            { startTime: '13:00', endTime: '14:00' },
            { startTime: '15:00', endTime: '16:00' },
          ],
        },
      ],
    },
  ],
};

module.exports = { studySpaces };
