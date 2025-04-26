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

module.exports = {
    createSession,
    getSessionById
}