const express = require('express');
const lecturerController = require('../controllers/lecturer.controller');
const { authLecturer } = require('../middlewares/auth.middleware');
const router = express.Router();


router.post('/create', lecturerController.createLecturer);
router.post('/login', lecturerController.loginLecturer);
router.get('/profile', authLecturer, lecturerController.getLecturerProfile);
module.exports = router;