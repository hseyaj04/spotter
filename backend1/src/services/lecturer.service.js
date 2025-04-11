const Lecturer = require('../models/lecturer.model');

const createLecturer = async (lecturerData) => {
    const { fullname, email, password, department } = lecturerData;
    if (!fullname.firstname || !fullname.lastname || !email || !password || !department) {
        throw new Error('All fields are required');
    }

    try {
        lecturerData.fullname.firstname = lecturerData.fullname.firstname.trim().toUpperCase();
        lecturerData.fullname.lastname = lecturerData.fullname.lastname.trim().toUpperCase();

        const newLecturer = new Lecturer(lecturerData);
        await newLecturer.save();
        return newLecturer;
    } catch (error) {
        throw new Error('Error creating lecturer: ' + error.message);
        
    }
}

module.exports = {
    createLecturer,
}