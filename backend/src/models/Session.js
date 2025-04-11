const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  course: {
    type: String,
    required: [true, 'Please provide the course name'],
    trim: true,
  },
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide the professor ID'],
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['active', 'ended'],
    default: 'active',
  },
  qrCode: {
    type: String,
    required: [true, 'Please provide the QR code'],
  },
  attendance: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    checkInTime: {
      type: Date,
      default: Date.now,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Calculate duration in minutes
sessionSchema.virtual('duration').get(function() {
  if (!this.endTime) return null;
  return Math.round((this.endTime - this.startTime) / (1000 * 60));
});

// Get attendance count
sessionSchema.virtual('attendanceCount').get(function() {
  return this.attendance.length;
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session; 