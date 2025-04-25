import React, {useContext} from 'react'
import { lecturerDataContext } from '../context/LecturerContext'
import Dropdown from '../../../assets/dropdown.png'
import { useNavigate } from 'react-router-dom'
function SelectCourse() {
    const {lecturer, setLecturer} = useContext(lecturerDataContext)
    const courses = lecturer.courses
    console.log(courses);
    
    
  return (
    <div className='bg-[#9587cd] my-4 w-full p-4 rounded-2xl flex flex-row items-center justify-between'>
        <div>
            <h2 className='text-3xl font-bold text-white'>CN</h2>
            <h3 className='text-lg text-gray-800 font-semibold'>{lecturer.courses[1]}</h3>
        </div>
        <div>
            <img className='w-12 mr-2' src={Dropdown} alt="" />
        </div>
    </div>
  )
}

export default SelectCourse