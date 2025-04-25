const lecturerSevice = require('../services/lecturer.service');


const createLecturer = async (req, res) => {
    try {
        const lecturerData = req.body;
        const newLecturer = await lecturerSevice.createLecturer(lecturerData);
        res.status(201).json(newLecturer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const loginLecturer = async (req, res) => {
    try {
        const lecturerData = req.body;
        const lecturer = await lecturerSevice.verifyLecturer(lecturerData);
        const token = lecturer.generateAuthToken();
        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
            httpOnly: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                lecturer,
                token
            },
    });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getLecturerProfile = async (req, res) => {
    try {
        const lecturer = req.lecturer
        res.status(200).json({
            status: 'success',
            data: {
                lecturer,
            },
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// const getAllCourses = async (req, res) => {
//     try {
//         const lecturer = req.lecturer

//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }


module.exports = {
    createLecturer,
    loginLecturer,
    getLecturerProfile
}