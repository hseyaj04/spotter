const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
    lecturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecturer',
        required: true
      },
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
      },
      qrCode: {
        data: String,         // Encrypted or hashed QR payload
        expiresAt: Date       // 5-minute expiration
      },
      attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
      }],
}, {
    timestamps: true
});


const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;