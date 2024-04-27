import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-2/3 flex justify-center items-center bg-white">
      <div className="w-96 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <p className="text-3xl font-bold text-black mb-6">Log In to Your Account</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="johnsondoe@nomail.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <input type="password" id="password" className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="********" />
            </div>
            <div className="mb-6">
              <p className="text-xs text-gray-700 cursor-pointer">Forgot Password?</p>
            </div>
            <button type="submit" className="w-full h-10 bg-blue-500 text-white font-bold rounded-lg focus:outline-none">
              <Link to="/admin" >
            Login
          </Link>
            </button>
          </form>
          <div className="mt-4">
            <p className="text-center text-sm font-bold text-black mb-2">Or</p>
            <button className="w-full h-10 bg-blue-700 text-white font-bold rounded-lg focus:outline-none">
              <Link to="/signup" >
            Create Account
          </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;