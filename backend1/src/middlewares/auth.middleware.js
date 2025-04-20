const jwt = require("jsonwebtoken");
const Student = require("../models/student.model");

module.exports.authStudent = async (req, res, next) => {
    try {
        // Retrieve token from cookies or authorization header
        const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET, { maxAge: '1h' });
        if (!decoded || !decoded.id) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        // Find the student in the database
        const student = await Student.findById(decoded.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Attach the student to the request object
        req.student = student;

        // Proceed to the next middleware or route handler
        return next();
    } catch (error) {
        console.error("Authentication error:", error.message);
        return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    }
};