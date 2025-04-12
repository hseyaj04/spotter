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


module.exports = {
    createSession
}