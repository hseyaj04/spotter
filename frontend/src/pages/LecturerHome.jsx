import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import TimeTable from '../../../assets/table-calendar.png'
import Dashboard from '../../../assets/dashboard.png'
import Profile from '../../../assets/profile.png'
import Plus from '../../../assets/plus.png'
import Lecturer from '../../../assets/teacher.png'
import Department from '../../../assets/corporation.png'
import Semester from '../../../assets/semester.png'
import SelectCourse from '../components/SelectCourse'
function LecturerHome() {
    const navigate = useNavigate()

    const handleAttendance = () => {
        navigate('/lecturer-attendance')
    }
  return (
    <div className='p-5'>
        <div className='flex justify-left my-1'>
            <Logo />
        </div>
        <div className='bg-[#B8A7FF] bg-opacity-40 rounded-2xl p-5 flex flex-row justify-between my-2'>
            <div className='flex flex-col items-center'>
                <img src={TimeTable} alt="Time Table" className='w-14 h-14' />
                <h2>Time-Table</h2>
            </div>
            <div className='flex flex-col items-center'>
                <img src={Dashboard} alt="Dashboard" className='w-14 h-14' />
                <h2>Dashboard</h2>
            </div>
            <div className='flex flex-col items-center mr-4'>
                <img src={Profile} alt="Profile" className='w-14 h-14' />
                <h2>Profile</h2>
            </div>
        </div>
        <div className='bg-[#8C7CD3] rounded-2xl flex flex-col items-center p-3 my-3'>
            <img className='h-12' src={Plus} alt="" />
            <h2 className='font-semibold text-lg'>Assign Assignment</h2>
        </div>
        <div className='bg-[#cec2ff] rounded-2xl flex flex-col items-center p-3 my-3'>
            <div className='flex flex-row items-center justify-right'>
                <img className='h-12' src={Lecturer} alt="" />
                <h2 className='text-2xl mx-3 font-semibold text-black'>Prof. John Doe</h2>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div className='mr-4 flex flex-row items-center justify-center'>
                    <img className='h-10 p-2' src={Department} alt="" />
                    <h3>CSE</h3>
                </div>
                <div className='ml-4 flex flex-row items-center justify-center'>
                    <img className='h-10 p-2' src={Semester} alt="" />
                    <h3>6th Sem</h3>
                </div>
            </div>
        </div>
        <div className='bg-[#4E4280] p-5 rounded-2xl flex flex-col items-center'>
            <h2 className='text-2xl mb-3 text-white font-semibold'>Select Course</h2>
            
            <SelectCourse />
        </div>
    </div>
  )
}

export default LecturerHome