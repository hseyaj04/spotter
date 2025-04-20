const express = require('express');
const studentController = require('../controllers/student.controller');
const { authStudent } = require('../middlewares/auth.middleware');

const router = express.Router();


router.post('/register', studentController.registerStudent);
router.post('/login', studentController.loginStudent);
router.post('/attendance', authStudent, studentController.markAttendance);
router.get('/profile', authStudent, studentController.getStudentProfile);

module.exports = router;