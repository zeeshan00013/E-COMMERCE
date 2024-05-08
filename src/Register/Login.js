import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { login } from '../redux/Redux.Auth/AuthenticationAction'; // Import login action creator
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      // Dispatch login action
      const response = await dispatch(login(email, password));
      console.log('Login successful:', response); // Log the response data
      navigate('/'); 
      console.log(email,password);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  const navigate = useNavigate();
 

  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
      <h2 class="text-2xl font-bold">Login</h2>
      <form   class="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required class="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required class="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        <button onClick={handleButtonClick} type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Login</button>
      </form>
    </div>
  );
}

export default Login;
