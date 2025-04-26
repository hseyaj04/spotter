import React, { useState, useContext, createContext, useEffect } from 'react';
import { StudentDataContext } from './StudentContext';

const lecturerDataContext = createContext();

function LecturerContext({ children }) {
    const [lecturer, setLecturer] = useState(() => {
        // Load lecturer data from localStorage if available
        const savedLecturer = localStorage.getItem('lecturer');
        return savedLecturer ? JSON.parse(savedLecturer) : {
            fullname: {
                firstname: "",
                lastname: ""
            },
            _id: "",
            email: "",
            password: "",
            department: "",
            courses: [{
                _id: "",
                name: "",
            }], // Array of course IDs
            selectedCourse: {
                _id: "",
                name: "",
            },
            createdAt: "",
            updatedAt: "",
            __v: 0
        };
    });

    // Save lecturer data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('lecturer', JSON.stringify(lecturer));
    }, [lecturer]);

    return (
        <lecturerDataContext.Provider value={{ lecturer, setLecturer }}>
            {children}
        </lecturerDataContext.Provider>
    );
}

export { lecturerDataContext, LecturerContext as default };