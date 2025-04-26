import React, { useContext, useState } from 'react'
import { lecturerDataContext } from '../context/LecturerContext'
import Dropdown from '../../../assets/dropdown.png'
import { Link, useNavigate } from 'react-router-dom'

function SelectCourse() {
    const { lecturer, setLecturer } = useContext(lecturerDataContext)
    const navigate = useNavigate()
    const courses = lecturer.courses
    
    // console.log(lecturer);
    
    // const handleStartAttendance = () => {
      
    //   setLecturer
    //   console.log(course);
      
    //   navigate('../start-attendance')
    // }
    return (
      <div className='w-full'>
        {
          courses.map((course, index) => (
            <button 
            onClick={() => {
              // console.log(course);
              
              const updatedLecturer = {
                ...lecturer,
                selectedCourse: course, // Update selectedCourse immutably
              };
              // console.log(updatedLecturer);
              
              setLecturer(updatedLecturer); // Update state with the new object
              navigate('/start-attendance');
            }}
            
            key={index} 
            className='bg-[#9587cd] my-4 w-full p-4 rounded-2xl flex flex-row items-center justify-between'>
                <h2 className='text-3xl font-bold text-white'>
                  {course?.name
                    ? course.name
                      .split(' ')
                      .map(word => word[0].toUpperCase())
                      .join('')
                    : 'N/A'}
                </h2>
                <h3 className='text-lg text-gray-800 font-semibold'>
                  {course?.name || 'Course Name Not Available'}
                </h3>
            </button>
          ))
        }
        
      </div>
      
    )
}

export default SelectCourse