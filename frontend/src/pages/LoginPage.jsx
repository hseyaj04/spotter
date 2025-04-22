import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Axios from 'axios';
import { StudentDataContext } from '../context/StudentContext';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {student, setStudent} = useContext(StudentDataContext)
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    const response = await Axios.post(
      `http://localhost:5000/api/v1/students/login`,
      {
        email,
        password,
      }
    )
    await setStudent(response.data.data.student)
    // console.log(student);
    
    
    
    localStorage.setItem('token', response.data.data.token)
    navigate('/home');
    
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  const handleLecturerLogin = () => {
    navigate('/lecturerlogin'); // Redirect to the lecturer login page
  }

  return (
    <div className="max-w-md mx-auto h-screen p-5">


        <Logo />
            
        <div className="p-8 bg-[#B8A7FF] bg-opacity-40 rounded-4xl">
            <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                <label htmlFor="email" className="block text-lg font-medium mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
                />
                </div>
                <div>
                <label htmlFor="password" className="block text-lg font-medium mb-1">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
                />
                </div>
                <button
                type="submit"
                className="w-full py-3 bg-[#4E4280] text-xl text-white font-semibold rounded-4xl hover:bg-blue-600 transition mt-6"
                >
                Login
                </button>
            </form>
            <div className="mt-6 text-center">
                <p className="mb-2">Don't have an account? <button
                onClick={handleSignupRedirect}
                className='text-[#4E4280] font-semibold hover:text-blue-600 transition'
                >
                 Sign Up
                </button></p>
                
            </div>
            
            
        </div> 
        <div className="mt-60 text-center">
            <button
            onClick={handleLecturerLogin}
            className='w-full py-3 bg-[#4E4280] text-xl text-white font-semibold rounded-4xl hover:bg-blue-600 transition mt-6'
            >
              Login as Lecturer
            </button>
            
        </div>
        
        
    </div>
  );
};

export default LoginPage;