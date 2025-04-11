const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
    courseCode: {
        type: String,
        required: true,
        unique: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
        enum: ['CSE', 'IT', 'ECE', 'EEE', 'MECH', 'CIVIL'],
    },
    lecturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecturer',
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
}, {
    timestamps: true,
})


const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;