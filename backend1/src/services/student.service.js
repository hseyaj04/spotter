const Student = require('../models/student.model');
const Course = require('../models/course.model');

const createStudent = async (studentData) => {
    console.log(studentData);
    
    const { fullname, enrollmentNo, email, contact, password, semester, department } = studentData;
    if (
        !fullname.firstname || 
        !fullname.lastname || 
        !enrollmentNo || 
        !email || 
        !contact || 
        !password ||
        !department ||
        !semester
    ) {
        throw new Error('All fields are required');
    }

    try {
        studentData.fullname.firstname = studentData.fullname.firstname.trim().toUpperCase();
        studentData.fullname.lastname = studentData.fullname.lastname.trim().toUpperCase();
        studentData.enrollmentNo = studentData.enrollmentNo.trim().toUpperCase();
        const newStudent = new Student(studentData);
        console.log(studentData);

        const courses = await Course.find({ department: studentData.department, semester: studentData.semester });
        if (courses && courses.length > 0) {
            for (const course of courses) {
            course.students.push(newStudent._id);
            await course.save();
            }
        }
        
        await newStudent.save();
        return newStudent;
    } catch (error) {
        throw new Error('Error registering student: ' + error.message);
    }
}

const verifyStudent = async (studentData) => {
    const { email, password, enrollmentNo, contact } = studentData;
    if (!(email || enrollmentNo || contact) || !password) {
        throw new Error('All fields are required');
    }

    try {
        let student;
        if(email){
            student = await Student.findOne({ email });
        }
        else{
            if(contact){
                student = await Student.findOne({ contact });
            }
            else{
                student = await Student.findOne({ enrollmentNo });
            }
        }
        
        if (!student) {
            throw new Error('Student not found');
        }

        const isMatch = await student.comparePassword(password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        return student;
    } catch (error) {
        throw new Error('Error verifying student: ' + error.message);
    }
}

const markAttendance = async (studentId, qrPayload) => {
    try {
        const session = await Session.findOne({
            'qrCode.data': qrPayload,
            'qrCode.expiresAt': { $gt: new Date() } // Not expired
        });
    
        if (!session) throw new Error('Session expired');
    
        // 3. Add student to attendees (avoid duplicates)
        if (!session.attendees.includes(studentId)) {
        session.attendees.push(studentId);
        await session.save();
        }

        return session;
    } catch (error) {
        throw new Error('Error marking attendance: ' + error.message);
    }
}

module.exports = {
    createStudent,
    verifyStudent,
    markAttendance
}