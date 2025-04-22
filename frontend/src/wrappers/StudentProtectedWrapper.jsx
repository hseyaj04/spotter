import React, { useEffect, useContext, useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { StudentDataContext } from '../context/StudentContext'

function StudentProtectedWrapper({children}) {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {student, setStudent} = useContext(StudentDataContext)
    useEffect(() => {
        if(!token) {
            navigate('/login')
            return;
        }

        const fetchStudentProfile = async () => {
            try {
                const response = await Axios.get(`http://localhost:5000/api/v1/students/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if(response.status == 200){
                    setStudent(response.data.data.student)
                }
                // console.log(response);
                
            } catch (error) {
                console.log(error);
                localStorage.removeItem('token')
                navigate('/login')
                
            }

            fetchStudentProfile();
        }
    }, [token, navigate, setStudent])
  return (
    <>{children}</>
  )
}

export default StudentProtectedWrapper