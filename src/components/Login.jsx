import React, {  useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from './hooks/useAuth';

const Login = () => {
  const {setAuth} = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const userRef = useRef()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('https://etitetecheventmanagementplatformbackend.onrender.com/api/auth', {
          email,
          password,
        });
        
        localStorage.setItem('user', JSON.stringify(response.data));
        
        // eslint-disable-next-line no-unsafe-optional-chaining
        const { role } = response?.data?.user;
        const userData= response?.data?.user;
        // eslint-disable-next-line no-unsafe-optional-chaining
        const { access_token } = response?.data;
        
        setAuth({access_token, role, userData, email, password })

        
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'user') {
          navigate(from, { replace: true });
        } else {
          alert('Failed to login user');
          console.log('Failed to login user');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
        }
      }
    } else {
      console.log('Form validation failed');
    }
  };

  useEffect(()=>{
    userRef.current.focus()
  },[])

  return (
    <div className="w-full h-2/3 flex justify-center items-center bg-white">
      <div className="w-96 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <p className="text-3xl font-bold text-black mb-6">Log In to Your Account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                ref={userRef}
                className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="johnsondoe@nomail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div className="mb-6">
              <p className="text-xs text-gray-700 cursor-pointer">Forgot Password?</p>
            </div>
            <button type="submit" className="w-full h-10 bg-blue-500 text-white font-bold rounded-lg focus:outline-none">
              Login
            </button>
          </form>
          <div className="mt-4">
            <p className="text-center text-sm font-bold text-black mb-2">Or</p>
            <button className="w-full h-10 bg-blue-700 text-white font-bold rounded-lg focus:outline-none">
              <Link to="/signup">Create Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
