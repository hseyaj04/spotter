import React, {useState, useContext, createContext} from 'react'
import { StudentDataContext } from './StudentContext';

const lecturerDataContext = createContext();

function LecturerContext({children}) {
    const [lecturer, setLecturer] = useState({
            fullname: {
              firstname: "",
              lastname: ""
            },
            _id: "",
            email: "",
            password: "",
            department: "",
            courses: [], // Array of course IDs
            createdAt: "",
            updatedAt: "",
            __v: 0
    })
  return (
    <lecturerDataContext.Provider value={{lecturer, setLecturer}}>
      {children}
    </lecturerDataContext.Provider>
  )
}

export {lecturerDataContext, LecturerContext as default};