import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

function LecturerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add lecturer login logic here (e.g., API call)
    console.log('Lecturer logging in with:', { email, password });

    // Navigate to lecturerhome after successful login
    navigate('/lecturerhome');
  };

  return (
    <div className="max-w-md mx-auto h-screen p-5">
      <Logo />
      <div className="p-8 bg-[#B8A7FF] bg-opacity-40 rounded-4xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Lecturer Login</h2>
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
      </div>
    </div>
  );
}

export default LecturerLogin;