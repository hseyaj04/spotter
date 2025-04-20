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
        const token = student.generateAuthToken();
        res.cookie('token', token, {
            expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour
            httpOnly: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                student,
                token
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
        const { studentId, qrPayload } = req.body;
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

const getStudentProfile = async (req, res) => {
    try {
        const student = req.student;
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

module.exports = {
    registerStudent,
    loginStudent,
    markAttendance,
    getStudentProfile
}