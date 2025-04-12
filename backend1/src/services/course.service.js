const Course = require('../models/course.model');
const Lecturer = require('../models/lecturer.model');
const createCourse = async (courseData) => {
    const { courseCode, courseName, semester, department, lecturerEmail } = courseData;
    if (!courseCode || !courseName || !semester || !department || !lecturerEmail) {
        throw new Error('All fields are required');
    }

    try {
        
        // console.log(courseData);
        
        courseData.courseCode = courseData.courseCode.trim().toUpperCase();
        courseData.courseName = courseData.courseName.trim().toUpperCase();
        const newCourse = new Course(courseData)
        const lecturer = await Lecturer.findOne({ email: lecturerEmail });
        if (!lecturer) {
            throw new Error('Lecturer not found');
        }

        if (!lecturer.courses) {
            lecturer.courses = [];
        }

        lecturer.courses.push(newCourse._id); // Add the course ID to the lecturer's courses array
        await lecturer.save();
        console.log(lecturer);
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