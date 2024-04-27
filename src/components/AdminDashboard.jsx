import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import useAuth from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';



const AdminDashboard = () => {
  const [events, setEvents] = useState([]);

    const navigate = useNavigate()


    const {auth} = useAuth()
  const token = auth?.access_token

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://etitetecheventmanagementplatformbackend.onrender.com/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, [token]);

 

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`https://etitetecheventmanagementplatformbackend.onrender.com/api/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update events after successful deletion
      const updatedEvents = events.filter((event) => event._id !== eventId);
      setEvents(updatedEvents);

      alert("Event deleted successfully")
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleRedirectToCreateEvent = () => {
    navigate('/createEvent')
  }

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
        {/* Event table */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Event Management</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleRedirectToCreateEvent}>
            Create Event
          </button>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Available Tickets</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event._id}>
                <td className="border border-gray-300 px-4 py-2">{event.title}</td>
                <td className="border border-gray-300 px-4 py-2">{event.price}</td>
                <td className="border border-gray-300 px-4 py-2">{event.location}</td>
                <td className="border border-gray-300 px-4 py-2">{formatEventDate(event.date)}</td>
                <td className="border border-gray-300 px-4 py-2">{event.availableTicket}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href={`#update/${event._id}`} className="text-green-600 hover:text-green-700"><CiEdit /></a>
                  <button
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDeleteEvent(event._id)}
                  ><FaRegTrashCan /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
