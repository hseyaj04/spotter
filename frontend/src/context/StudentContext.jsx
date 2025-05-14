import React, { useState, createContext, useEffect } from 'react';

// Create the context
const StudentDataContext = createContext();

const StudentContext = ({ children }) => {
  // Initialize state with data from localStorage if available
  const [student, setStudent] = useState(() => {
    const storedStudent = localStorage.getItem('student');
    return storedStudent ? JSON.parse(storedStudent) : {
      _id: "",
      fullname: {
        firstname: "",
        lastname: ""
      },
      email: "",
      contact: "",
      enrollmentNo: "",
      department: "",
      semester: 0,
      isVerified: false,
      createdAt: "",
      updatedAt: "",
      password: "",
      __v: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('student', JSON.stringify(student));
  }, [student]);

  return (
    <StudentDataContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentDataContext.Provider>
  );
};

// Export both the context and the provider
export { StudentDataContext, StudentContext as default };