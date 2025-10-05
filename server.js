const express = require('express');
const studentRoutes = require('./routes/student');
const programRoutes = require('./routes/programs');
const admissionRoutes = require('./routes/admissions');
const serviceRoutes = require('./routes/services');

const app = express();
app.use(express.json());

app.use('/api', studentRoutes);
app.use('/api', programRoutes);
app.use('/api', admissionRoutes);
app.use('/api', serviceRoutes);

app.get('/', (req, res) => res.send('API running...'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
