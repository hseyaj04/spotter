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

const verifyLecturer = async (lecturerData) => {
    const { email, password } = lecturerData;
    if (!email || !password) {
        throw new Error('All fields are required');
    }

    try {
        const lecturer = await Lecturer.findOne({ email });
        if (!lecturer) {
            throw new Error('Lecturer not found');
        }

        const isMatch = await lecturer.comparePassword(password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }

        return lecturer;
    } catch (error) {
        throw new Error('Error verifying lecturer: ' + error.message);
    }
}

const getLecturerByEmail = async (lecturerId) => {
    try {
        const lecturer = await Lecturer.findById(lecturerId);
        if (!lecturer) {
            throw new Error('Lecturer not found');
        }
        return lecturer;
    } catch (error) {
        throw new Error('Error fetching lecturer: ' + error.message);
    }
}

module.exports = {
    createLecturer,
    verifyLecturer
}