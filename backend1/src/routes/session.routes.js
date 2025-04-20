const express = require('express');
const sessionController = require('../controllers/session.controller');

const router = express.Router();


router.post('/create', sessionController.createSession);
router.get('/get-session/:sessionId', sessionController.getSessionById);



module.exports = router;