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


module.exports = {
    createLecturer,
}