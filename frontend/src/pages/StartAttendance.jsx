
import React, { useContext } from 'react'
import { lecturerDataContext } from '../context/LecturerContext'
import Logo from '../components/Logo'
import Teacher from '../../../assets/teacher.png'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { SessionDataContext } from '../context/SessionContext'
function StartAttendance() {
    const navigate = useNavigate()
    const {sessionData, setSessionData} = useContext(SessionDataContext)
    const {lecturer, setLecturer} = useContext(lecturerDataContext)
    // console.log(lecturer);
    const handleStartAttendance = async () => {
        const response = await Axios.post('http://localhost:5000/api/v1/sessions/create', {
            lecturerId: lecturer._id,
            courseId: lecturer.selectedCourse.id,
        })
        // console.log(response.data);
        
        setSessionData(response.data)
        // console.log(sessionData);
        
        // console.log(session);
                
        navigate('/lecturerattendance')
    }
  return (
    <div className='p-3'>
        <Logo/>
        <div className='bg-[#5F4FA6] rounded-3xl p-5'>
            <div className='flex flex-row items-center justify-center mb-5'>
                <h2 className='text-white text-4xl font-semibold '>{lecturer.selectedCourse.name}</h2>
            </div>

            <div className='bg-[#8f7ae6] py-3 px-6 rounded-3xl'>
                <div className='flex flex-row items-center justify-right '>
                    <img className='h-15' src={Teacher} alt="" />
                    <div className='text-2xl mx-3 font-semibold text-black'>
                        <div className='mr-2'>
                            {lecturer.fullname.firstname.charAt(0).toUpperCase() + lecturer.fullname.firstname.slice(1).toLowerCase()}
                        </div>
                        <div>
                            {lecturer.fullname.lastname.charAt(0).toUpperCase() + lecturer.fullname.lastname.slice(1).toLowerCase()}
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        <button
        onClick={handleStartAttendance}

        className='bg-black p-4 rounded-full w-full mt-5 text-white text-3xl'>
            Start Attendance
        </button>
    </div>
  )
}

export default StartAttendance