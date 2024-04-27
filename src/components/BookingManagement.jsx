import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from './hooks/useAuth';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const { auth } = useAuth();
  const token = auth?.access_token || JSON.parse(localStorage.getItem('user'))?.access_token;

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://etitetecheventmanagementplatformbackend.onrender.com/api/bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBookings(); 
    }
  }, [token]); 

  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.put(
        `https://etitetecheventmanagementplatformbackend.onrender.com/api/bookings/${bookingId}`,
        null, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchBookings(); 
      alert('Booking cancelled successfully');
    } catch (error) {
      console.error('Error cancelling booking:', error);
      alert('Failed to cancel booking');
    }
  };

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
        </ul>
      </div>
      {/* Main content */}
      <div className="main-content flex-grow p-4">
        {/* Booking table */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Booking Management</h2>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Event Name</th>
              <th className="border border-gray-300 px-4 py-2">User Name</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Attendees</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking._id}>
                <td className="border border-gray-300 px-4 py-2">{booking.eventName}</td>
                <td className="border border-gray-300 px-4 py-2">{booking.userName}</td>
                <td className="border border-gray-300 px-4 py-2">{booking.eventLocation}</td>
                <td className="border border-gray-300 px-4 py-2">{formatEventDate(booking.date)}</td>
                <td className="border border-gray-300 px-4 py-2">{booking.ticketsBooked}</td>
                <td className="border border-gray-300 px-4 py-2">{booking.status}</td>
                <td className="border border-gray-300 px-4 py-2">
                    {booking.status === 'cancelled' ?
                  <p className="text-red-600 hover:text-red-700">cancelled</p>
                  :
                  <button className="text-red-600 hover:text-red-700" onClick={() => handleCancelBooking(booking._id)}>Cancel</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingManagement;
