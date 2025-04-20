const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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



LecturerSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        const saltRounds = 10;
        this.password = bcrypt.hashSync(this.password, saltRounds);
    }
    next();
}
);
LecturerSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
}

LecturerSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
    return token;
}

const Lecturer = mongoose.model('Lecturer', LecturerSchema);
module.exports = Lecturer;
