const Session = require('../models/session.model');
const QRCode = require('qrcode');
const crypto = require('crypto');

const createSession = async (sessionData) => {
    try {
        const {lecturerId, courseId} = sessionData;
        if(!lecturerId || !courseId) {
            throw new Error('Lecturer ID and Course ID are required');
        }

        // 1. Generate unique session payload
        const sessionPayload = crypto.randomBytes(16).toString('hex'); // Random string
        const expiresAt = new Date(Date.now() + 45 * 60 * 1000); // 45 minutes

        // 2. Generate QR code image
        const qrDataURL = await QRCode.toDataURL(sessionPayload);

        // 3. Save session to DB
        const session = await Session.create({
        lecturer: lecturerId,
        course: courseId,
        qrCode: { data: sessionPayload, expiresAt },
        attendees: [],
        status: 'active'
        });

        return { session, qrDataURL }; // Return the session object and QR code
    } catch (error) {
        throw new Error('Error creating session: ' + error.message);
    }
}

const endSession = async (sessionId) => {
    try {
        const session = await Session.findById(sessionId);
        if (!session) {
            throw new Error('Session not found');
        }
        session.status = 'completed';
        await session.save();
        return session;
    } catch (error) {
        throw new Error('Error ending session: ' + error.message);
    }
}


const getSessionById = async (sessionId) => {
    try {
        const session = await Session.findById(sessionId).populate('lecturer course attendees');
        if (!session) {
            throw new Error('Session not found');
        }
        return session;
    } catch (error) {
        throw new Error('Error fetching session: ' + error.message);
    }
}

const getOngoingSessions = async (department, semester) => {
    try {
      const sessions = await Session.aggregate([
        {
          $match: {
            status: "active", // Only active sessions
          },
        },
        {
          $lookup: {
            from: "courses", // Collection name for courses
            localField: "course",
            foreignField: "_id",
            as: "courseDetails",
          },
        },
        {
          $unwind: "$courseDetails", // Flatten the courseDetails array
        },
        {
          $match: {
            "courseDetails.department": department, // Match department
            "courseDetails.semester": semester,     // Match semester
          },
        },
        {
          $project: {
            _id: 1,
            lecturer: 1,
            course: 1,
            "courseDetails.courseName": 1,
            "qrCode.data": 1,
            "qrCode.expiresAt": 1,
            attendees: 1,
            status: 1,
            createdAt: 1,
          },
        },
      ]);
  
      return sessions;
    } catch (error) {
      throw new Error("Error fetching ongoing sessions: " + error.message);
    }
  };
  

module.exports = {
    createSession,
    getSessionById,
    endSession,
    getOngoingSessions
}