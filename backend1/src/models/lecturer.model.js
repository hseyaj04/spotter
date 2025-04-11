const mongoose = require('mongoose');
const { Schema } = mongoose;

const LecturerSchema = new Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }],
    },
    { timestamps: true }
);
