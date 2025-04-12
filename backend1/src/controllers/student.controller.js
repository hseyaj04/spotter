const studentService = require('../services/student.service');



const registerStudent = async (req, res) => {
    try {
        // console.log(req.body);
        
        const studentData = req.body;
        const student = await studentService.createStudent(studentData);
        res.status(201).json({
            status: 'success',
            data: {
                student,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}

const loginStudent = async (req, res) => {
    try {
        const studentData = req.body;
        console.log(studentData);
        
        const student = await studentService.verifyStudent(studentData);
        res.status(200).json({
            status: 'success',
            data: {
                student,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}

const markAttendance = async (req, res) => {
    try {
        const { studentId, qrPayload } = req.params;
        const attendance = await studentService.markAttendance(studentId, qrPayload);
        res.status(200).json({
            status: 'success',
            data: {
                attendance,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}

module.exports = {
    registerStudent,
    loginStudent,
    markAttendance
}