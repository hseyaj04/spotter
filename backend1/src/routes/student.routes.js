const express = require('express');
const studentController = require('../controllers/student.controller');

const router = express.Router();


router.post('/register', studentController.registerStudent);
router.post('/login', studentController.loginStudent);



module.exports = router;