const sessionService = require('../services/session.service');



const createSession = async (req, res) => {
    try {
        const sessionData = req.body;
        const session = await sessionService.createSession(sessionData);
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const endSession = async (req, res) => {
    try {
        const { sessionId } = req.body;
        const session = await sessionService.endSession(sessionId);
        if (!session) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSessionById = async (req, res) => {
    try {
        const {sessionId} = req.params;
        if (!sessionId) {
            return res.status(400).json({ message: 'Session ID is required' });
        }
        const session = await sessionService.getSessionById(sessionId);
        if (!session) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createSession,
    getSessionById,
    endSession
}