const express = require('express');
const Session = require('../models/Session');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

// Mark attendance (student only)
router.post('/mark', protect, restrictTo('student'), async (req, res) => {
  try {
    const { sessionId, qrCode } = req.body;

    // Find the session
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    // Check if session is active
    if (session.status !== 'active') {
      return res.status(400).json({ message: 'Session is not active' });
    }

    // Verify QR code
    if (session.qrCode !== qrCode) {
      return res.status(400).json({ message: 'Invalid QR code' });
    }

    // Check if student has already marked attendance
    const existingAttendance = session.attendance.find(
      record => record.student.toString() === req.user._id.toString()
    );
    if (existingAttendance) {
      return res.status(400).json({ message: 'Attendance already marked' });
    }

    // Add attendance record
    session.attendance.push({
      student: req.user._id,
      checkInTime: Date.now(),
    });

    await session.save();

    res.json({ message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get student's attendance history
router.get('/history', protect, restrictTo('student'), async (req, res) => {
  try {
    const sessions = await Session.find({
      'attendance.student': req.user._id,
    })
      .sort({ startTime: -1 })
      .populate('professor', 'name email');

    res.json(sessions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get attendance statistics (admin only)
router.get('/stats', protect, restrictTo('admin'), async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const query = {};
    if (startDate && endDate) {
      query.startTime = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const sessions = await Session.find(query)
      .populate('professor', 'name email')
      .populate('attendance.student', 'name email');

    const stats = {
      totalSessions: sessions.length,
      totalAttendance: sessions.reduce((acc, session) => acc + session.attendance.length, 0),
      averageAttendance: sessions.length > 0
        ? sessions.reduce((acc, session) => acc + session.attendance.length, 0) / sessions.length
        : 0,
      sessionsByCourse: {},
      attendanceByStudent: {},
    };

    // Calculate statistics by course
    sessions.forEach(session => {
      if (!stats.sessionsByCourse[session.course]) {
        stats.sessionsByCourse[session.course] = {
          totalSessions: 0,
          totalAttendance: 0,
        };
      }
      stats.sessionsByCourse[session.course].totalSessions++;
      stats.sessionsByCourse[session.course].totalAttendance += session.attendance.length;
    });

    // Calculate statistics by student
    sessions.forEach(session => {
      session.attendance.forEach(record => {
        const studentId = record.student._id.toString();
        if (!stats.attendanceByStudent[studentId]) {
          stats.attendanceByStudent[studentId] = {
            name: record.student.name,
            totalAttendance: 0,
            sessions: [],
          };
        }
        stats.attendanceByStudent[studentId].totalAttendance++;
        stats.attendanceByStudent[studentId].sessions.push({
          sessionId: session._id,
          course: session.course,
          date: session.startTime,
        });
      });
    });

    res.json(stats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 