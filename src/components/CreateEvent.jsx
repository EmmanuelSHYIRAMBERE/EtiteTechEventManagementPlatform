import React, { useState } from 'react';
import axios from 'axios';
import useAuth from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";

const CreateEvent = () => {

  const user = localStorage.getItem('user')


  const {auth} = useAuth()
  const token = auth?.access_token || JSON.parse(user)?.access_token;

  const navigate = useNavigate()

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null); // Updated to accept file
  const [seatNumber, setSeatNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); 
    formData.append('title', title);
    formData.append('date', date);
    formData.append('location', location);
    formData.append('image', image); 
    formData.append('seatNumber', seatNumber);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('description', description);

    try {
      const response = await axios.post('https://etitetecheventmanagementplatformbackend.onrender.com/api/events', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Set content type for FormData
        },
      });


      alert('Event created successfully')
      console.log('Event created successfully:', response.data);

      navigate('/admin')

    } catch (error) {
      console.error('Error creating event:', error);
      // Handle error (e.g., show an error message)
    }

   
  };

  return (
    <div className="admin-dashboard flex">
      {/* Sidebar */}
      <div className="sidebar bg-gray-200 w-64 p-4">
        {/* Sidebar content */}
        <ul className="space-y-2">
            <h2 className="text-lg font-bold mb-4">
              <li>
                <a href="/admin">Event Management</a>
              </li>
            </h2>
            <h2 className="text-lg font-bold mb-4">
              <li>
                <a href="/bookingmanagement">Booking Management</a>
              </li>
            </h2>
            <h2 className="text-lg font-bold mb-4">
              <li>
                <a href="#log-out" className="block flex items-center text-blue-600 hover:text-blue-700 hover:bg-gray-300 rounded px-2 py-1">
                  <IoLogInOutline className="mr-2" /> <span>Log Out</span>
                </a>
              </li>
            </h2>
          
          
        </ul>
      </div>
      {/* Main content */}
    <div className="create-event p-6">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        {/* Title */}
        <label htmlFor="title" className="block">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />

        {/* Date */}
        <label htmlFor="date" className="block">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />

        {/* Location */}
        <label htmlFor="location" className="block">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />

        {/* Image Upload */}
        <label htmlFor="image" className="block">Upload Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])} // Update state with selected file
          required
          accept="image/*" 
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />

        {/* Seat Number */}
        <label htmlFor="seatNumber" className="block">Seat Number:</label>
        <input
          type="number"
          id="seatNumber"
          value={seatNumber}
          onChange={(e) => setSeatNumber(Number(e.target.value))}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />

        {/* Price */}
        <label htmlFor="price" className="block">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />

        {/* Category */}
        <label htmlFor="category" className="block">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />

        {/* Description */}
        <label htmlFor="description" className="block">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Create Event
        </button>
      </form>
    </div>
    </div>
  );
};

export default CreateEvent;
