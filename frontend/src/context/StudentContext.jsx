import React, { useState, createContext } from 'react';

// Create the context
const StudentDataContext = createContext();

const StudentContext = ({ children }) => {
  const [student, setStudent] = useState({
    _id: "",               // String: Unique identifier for the student
    fullname: {
      firstname: "",       // String: First name of the student
      lastname: ""         // String: Last name of the student
    },
    email: "",             // String: Email address of the student
    contact: "",           // String: Contact number of the student
    enrollmentNo: "",      // String: Enrollment number of the student
    department: "",        // String: Department of the student
    semester: 0,           // Number: Current semester of the student
    isVerified: false,     // Boolean: Verification status of the student
    createdAt: "",         // String: Date of creation (ISO format)
    updatedAt: "",         // String: Date of last update (ISO format)
    password: "",          // String: Encrypted password (hashed)
    __v: 0                 // Number: Version key (used by MongoDB)
  });

  return (
    <StudentDataContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentDataContext.Provider>
  );
};

// Export both the context and the provider
export { StudentDataContext, StudentContext as default };