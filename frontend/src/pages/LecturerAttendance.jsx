import React, { useState, useContext, useEffect, useRef } from 'react';
import Logo from '../components/Logo';
import Axios from 'axios';
import { lecturerDataContext } from '../context/LecturerContext';

function LecturerAttendance() {
    const [isQrSelected, setIsQrSelected] = useState(true);
    const [isPresentSelected, setIsPresentSelected] = useState(false);
    const [attendees, setAttendees] = useState([]);
    const qrImage = "https://www.qrcode-monkey.com/img/default-preview-qr.svg";
    // const { lecturer } = useContext(lecturerDataContext);
    
    
    const handlePresentClick = async () => {
        const sessionId = "6804b6ea63c4e1c9a0607da5";
        const response = (await Axios.get(`http://localhost:5000/api/v1/sessions/get-session/${sessionId}`)).data.attendees;
        setAttendees(response);

        setIsPresentSelected(true);
        setIsQrSelected(false);
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
        </div>
    );
}

export default LecturerAttendance;