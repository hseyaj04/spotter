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
        const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 5 minutes

        // 2. Generate QR code image
        const qrDataURL = await QRCode.toDataURL(sessionPayload);

        // 3. Save session to DB
        const session = await Session.create({
        lecturer: lecturerId,
        course: courseId,
        qrCode: { data: sessionPayload, expiresAt },
        attendees: []
        });

        return { session, qrDataURL }; // Return the session object and QR code
    } catch (error) {
        throw new Error('Error creating session: ' + error.message);
    }
}

module.exports = {
    createSession
}