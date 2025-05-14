import React, { useState, useContext, use } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { StudentDataContext } from '../context/StudentContext';
import Axios from 'axios';
const StudentSignup = () => {
  const {student, setStudent} = useContext(StudentDataContext);
  const [formData, setFormData] = useState({
    fullname: {
        firstname: '',
        lastname: '',
    },
    enrollmentNo: '',
    email: '',
    password: '',
    contact: '',
    semester: '',
    department: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'firstname' || name === 'lastname') {
      setFormData({
        ...formData,
        fullname: {
          ...formData.fullname,
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    

    const response = await Axios.post(
      `http://localhost:5000/api/v1/students/register`,
      {
        fullname: formData.fullname,
        enrollmentNo: formData.enrollmentNo,
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
        semester: formData.semester,
        department: formData.department,
      }
    )
    const loginResponse = await Axios.post(
      `http://localhost:5000/api/v1/students/login`,
      {
        email: formData.email,
        password: formData.password,
      }
    )
    console.log(loginResponse.data.data);
    setStudent(loginResponse.data.data.student);
    
    localStorage.setItem('token', loginResponse.data.data.token)
    // console.log(loginResponse.data);

    navigate('/home'); // Redirect to the landing page after signup
    
    
    
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <Logo />

      <div className="p-8 bg-[#B8A7FF] bg-opacity-40 rounded-4xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="firstname" className="block text-lg font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.fullname.firstname}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-lg font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.fullname.lastname}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
            />
          </div>
          <div>
            <label htmlFor="enrollmentNo" className="block text-lg font-medium mb-1">
              Enrollment Number
            </label>
            <input
              type="text"
              id="enrollmentNo"
              name="enrollmentNo"
              value={formData.enrollmentNo}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-lg font-medium mb-1">
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
            />
          </div>
          <div>
            <label htmlFor="semester" className="block text-lg font-medium mb-1">
              Semester
            </label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
            >
              <option value="" disabled>Select Semester</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="department" className="block text-lg font-medium mb-1">
              Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-white"
            >
              <option value="" disabled>Select Department</option>
              {['CSE', 'IT', 'ECE', 'EEE', 'MECH', 'CIVIL'].map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSignup}
            type="submit"
            className="w-full py-3 bg-[#4E4280] text-xl text-white font-semibold rounded-4xl hover:bg-blue-600 transition mt-6"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="mb-2">
            Already have an account?{' '}
            <button
              onClick={handleLoginRedirect}
              className="text-[#4E4280] font-semibold hover:text-blue-600 transition"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;