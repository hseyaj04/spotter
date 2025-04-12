const express = require('express');
const lecturerController = require('../controllers/lecturer.controller');

const router = express.Router();


router.post('/create', lecturerController.createLecturer);
router.post('/login', lecturerController.loginLecturer);

module.exports = router;