import React, { useState, useContext, useEffect} from 'react';
import Logo from '../components/Logo';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { SessionDataContext } from '../context/SessionContext';
function LecturerAttendance() {
    const [isQrSelected, setIsQrSelected] = useState(true);
    const [isPresentSelected, setIsPresentSelected] = useState(false);
    const [attendees, setAttendees] = useState([]);
    const navigate = useNavigate();
    // const { lecturer } = useContext(lecturerDataContext);
    const {sessionData, setSessionData } = useContext(SessionDataContext);
    // console.log(sessionData);
    const qrImage = sessionData.qrDataURL;
    // qrImage = session.
    

    

    
    const handlePresentClick = async () => {
        const sessionId = sessionData.session._id;
        const response = (await Axios.get(`http://localhost:5000/api/v1/sessions/get-session/${sessionId}`)).data.attendees;
        setAttendees(response);

        setIsPresentSelected(true);
        setIsQrSelected(false);
    };

    const handleEndAttendance = async () => {
        const sessionId = sessionData.session._id;
        try {
            await Axios.post(`http://localhost:5000/api/v1/sessions/end-session/`, {
                sessionId: sessionId,
            });
            setSessionData((prevData) => ({
                ...prevData,
                session: {
                    ...prevData.session,
                    status: 'completed',
                },
            }));
            navigate('/lecturerhome');
            // alert('Attendance session ended successfully.');
        } catch (error) {
            console.error('Error ending attendance session:', error);
            alert('Failed to end attendance session.');
        }
    };

    return (
        <div className='p-5'>
            <div className='flex flex-col items-start'>
                <Logo />
            </div>
            <div className='bg-[#4E4280] w-full flex flex-col items-center justify-center rounded-xl p-5 mt-5'>
                <div className='p-4 flex flex-row justify-around items-center w-full'>
                    <button
                        onClick={() => {
                            setIsQrSelected(true);
                            setIsPresentSelected(false);
                        }}
                        className={`${isQrSelected ? 'bg-black' : 'bg-[#B8A7FF]'} py-3 text-2xl rounded-full text-white font-semibold w-full mx-2`}
                    >
                        QR Code
                    </button>
                    <button
                        onClick={handlePresentClick}
                        className={`${isPresentSelected ? 'bg-black' : 'bg-[#B8A7FF]'} py-3 text-2xl rounded-full text-white font-semibold w-full mx-2`}
                    >
                        Present
                    </button>
                </div>
                {isQrSelected && (
                    <div className='w-full p-5 bg-black rounded-2xl'>
                        <img className='w-full rounded-xl' src={qrImage} alt="" />
                    </div>
                )}
                {isPresentSelected && (
                    <div className='w-full'>
                        {attendees.map((attendee, index) => (
                            <div key={index} className='bg-black my-2 py-3 px-6 rounded-2xl'>
                                <h2 className='text-white text-2xl font-semibold'>{attendee.enrollmentNo}</h2>
                                <h3 className='text-gray-400 text-m font-semibold'>{attendee.fullname.firstname} {attendee.fullname.lastname}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='mt-5'>
                <button
                    onClick={handleEndAttendance}
                    className='bg-red-600 py-3 text-2xl rounded-full text-white font-semibold w-full'
                >
                    End Attendance
                </button>
            </div>
        </div>
    );
}

export default LecturerAttendance;