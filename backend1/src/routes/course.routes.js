const express = require('express');
const courseController = require('../controllers/course.controller');

const router = express.Router();


router.post('/create', courseController.createCourse);
// router.get('/get-all', courseController.getAllCourses);



module.exports = router;