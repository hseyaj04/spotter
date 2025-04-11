const express = require('express');
const Session = require('../models/Session');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

// Create new session (professor only)
router.post('/', protect, restrictTo('professor'), async (req, res) => {
  try {
    const { course, qrCode } = req.body;

    const session = await Session.create({
      course,
      professor: req.user._id,
      qrCode,
    });

    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// End session (professor only)
router.put('/:id/end', protect, restrictTo('professor'), async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    // Check if session belongs to the professor
    if (session.professor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to end this session' });
    }

    // Check if session is already ended
    if (session.status === 'ended') {
      return res.status(400).json({ message: 'Session already ended' });
    }

    session.status = 'ended';
    session.endTime = Date.now();
    await session.save();

    res.json(session);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all sessions for a professor
router.get('/professor', protect, restrictTo('professor'), async (req, res) => {
  try {
    const sessions = await Session.find({ professor: req.user._id })
      .sort({ startTime: -1 })
      .populate('attendance.student', 'name email');

    res.json(sessions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all sessions (admin only)
router.get('/', protect, restrictTo('admin'), async (req, res) => {
  try {
    const sessions = await Session.find()
      .sort({ startTime: -1 })
      .populate('professor', 'name email')
      .populate('attendance.student', 'name email');

    res.json(sessions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get single session
router.get('/:id', protect, async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate('professor', 'name email')
      .populate('attendance.student', 'name email');

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    // Check if user is authorized to view this session
    if (
      req.user.role !== 'admin' &&
      session.professor._id.toString() !== req.user._id.toString() &&
      !session.attendance.some(record => record.student._id.toString() === req.user._id.toString())
    ) {
      return res.status(403).json({ message: 'Not authorized to view this session' });
    }

    res.json(session);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 