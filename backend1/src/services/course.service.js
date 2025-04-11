const Course = require('../models/course.model');
const Lecturer = require('../models/lecturer.model');
const createCourse = async (courseData) => {
    const { courseCode, courseName, semester, department, lecturerEmail } = courseData;
    if (!courseCode || !courseName || !semester || !department || !lecturerEmail) {
        throw new Error('All fields are required');
    }

    try {
        const lecturer = await Lecturer.findOne({ email: lecturerEmail });
        console.log(lecturer);
        console.log(courseData);
        
        courseData.courseCode = courseData.courseCode.trim().toUpperCase();
        courseData.courseName = courseData.courseName.trim().toUpperCase();
        const newCourse = new Course(courseData);
        newCourse.lecturer = lecturer._id; // Assign the lecturer ID to the course
        await newCourse.save();
        return newCourse;
    } catch (error) {
        throw new Error('Error creating course: ' + error.message);
    }
}

module.exports = {
    createCourse
}