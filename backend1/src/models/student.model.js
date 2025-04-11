const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const validator = require('validator');

const studentSchema = new Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
    },
    enrollmentNo: {
        type: String,
        required: true,
        unique: true,
        length: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    contact:{
        type: Number,
        length: 10,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
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
}, {
    timestamps: true,
});

studentSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

studentSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
}

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;