import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [fullNames, setFullNames] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState({});
 
  const validateForm = () => {
    const errors = {};
    if (!fullNames.trim()) {
      errors.fullNames = 'Full name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.trim().length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!phoneNo.trim()) {
      errors.phoneNo = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phoneNo.trim())) {
      errors.phoneNo = 'Phone number must be 10 digits';
    }
    if (!location.trim()) {
      errors.location = 'Location is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('https://companyeventmanagement.onrender.com/api/users', {
          fullNames,
          email,
          password,
          phoneNo,
          location,
        });
        console.log('User registered successfully:', response.data);
        window.location.href = '/login';

      } catch (error) {
        console.error('Error registering user:', error.response?.data || error.message);
      }
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="w-full h-2/3 flex justify-center items-center bg-white">
      <div className="w-96 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <p className="text-3xl font-bold text-black mb-6">Create Your Account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullNames" className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullNames"
                className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="John Doe"
                value={fullNames}
                onChange={(e) => setFullNames(e.target.value)}
              />
              {errors.fullNames && <p className="text-xs text-red-500 mt-1">{errors.fullNames}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNo" className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                id="phoneNo"
                className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="1234567890"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              {errors.phoneNo && <p className="text-xs text-red-500 mt-1">{errors.phoneNo}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-1">Location</label>
              <input
                type="text"
                id="location"
                className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="City, Country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
            </div>
            <button type="submit" className="w-full h-10 bg-blue-500 text-white font-bold rounded-lg focus:outline-none">Sign Up</button>
          </form>
          <div className="mt-4">
            <p className="text-center text-sm font-bold text-black mb-2">Already have an account?
              <Link to="/login" className="text-blue-500 cursor-pointer">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
