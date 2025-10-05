const studentFinances = {
  currency: 'AED',
  outstandingBalance: '2450.00',
  pastPayments: [
    {
      amount: 5000,
      date: '2025-07-05',
      receiptId: 'RCT20250705-001',
    },
    {
      amount: 5000,
      date: '2025-04-10',
      receiptId: 'RCT20250410-002',
    },
    {
      amount: 5000,
      date: '2025-01-15',
      receiptId: 'RCT20250115-003',
    },
  ],
  futurePayments: [
    {
      amount: 2450,
      dueDate: '2025-11-20',
    },
  ],
};

module.exports = { studentFinances };
