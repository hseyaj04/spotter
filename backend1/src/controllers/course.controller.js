const courseService = require('../services/course.service');

const createCourse = async (req, res) => {
    try {
        const courseData = req.body;
        const newCourse = await courseService.createCourse(courseData);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    createCourse
}