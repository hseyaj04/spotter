const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// app.use('/', (req, res) => {
//   res.send('Hello World!');
// });

const studentRoutes = require('./routes/student.routes');
const courseRoutes = require('./routes/course.routes');
const lecturerRoutes = require('./routes/lecturer.routes');
const sessionRoutes = require('./routes/session.routes');
app.use('/api/v1/lecturers', lecturerRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/sessions', sessionRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {

    console.log('Connected to MongoDB');
    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

module.exports = app; 