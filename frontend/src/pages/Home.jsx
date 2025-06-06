import React, { useContext } from 'react'
import Logo from '../components/Logo.jsx'
import TimeTable from '../../../assets/table-calendar.png'
import Dashboard from '../../../assets/dashboard.png'
import Profile from '../../../assets/profile.png'
import { StudentDataContext } from '../context/StudentContext.jsx'
import OngoingAttendance from '../components/OngoingAttendance.jsx'
import Axios from 'axios'
function Home() {
    const {student, setStudent} = useContext(StudentDataContext)
    // console.log(student);
    const department = student.department
    const semester = student.semester
    
    const getSessions = async () => {
        const response = await Axios.post('http://localhost:5000/api/v1/sessions/ongoing-sessions', {
            department,
            semester
        }) 
        // console.log(response);
        
        return response.data;
    }

    const [sessions, setSessions] = React.useState([]);

    React.useEffect(() => {
        const fetchSessions = async () => {
            const data = await getSessions();
            setSessions(data);
        };
        fetchSessions();
    }, []);


    console.log(sessions);
    
    
      
    
  return (
    <div className="max-w-md mx-auto p-5">
        <Logo />
        <div className='bg-[#B8A7FF] bg-opacity-40 rounded-2xl p-5 flex flex-row justify-between'>
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

        <div className='bg-[#4E4280] bg-opacity-40 rounded-2xl p-5 flex flex-col justify-between mt-5 h-full'>
            <h2 className='text-left text-white font-semibold text-xl pb-4'>Ongoing Attendance</h2>
            <div>
                {sessions.map((session, index) => (
                    <OngoingAttendance key={index} session={session} />
                ))} 
            </div>
        </div>
    </div>
  )
}

export default Home