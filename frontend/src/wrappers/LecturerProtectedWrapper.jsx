import React, {useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import {lecturerDataContext} from '../context/LecturerContext'
function LecturerProtectedWrapper({children}) {
    const token = localStorage.getItem('token')
    const navigate = useNavigate() 
    const {lecturer, setLecturer} = useContext(lecturerDataContext)
    useEffect(() => {
        if(!token) {
            navigate('/lecturerlogin')
            return;
        }

        const fetchLecturerProfile = async () => {
            try {
                const response = await Axios.get(`http://localhost:5000/api/v1/lecturers/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if(response.status == 200){
                    setLecturer(response.data.data.lecturer)
                }
                // console.log(response);
                
            } catch (error) {
                console.log(error);
                localStorage.removeItem('token')
                navigate('/login')
                
            }

            fetchLecturerProfile();
        }
    }, [token, navigate, setLecturer])
  return (
    <>
     {children}
    </>
  )
}

export default LecturerProtectedWrapper