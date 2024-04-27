import React, {  useState } from 'react';
import CreateEvent from './CreateEvent';

const AdminDashboard =  () => {
 const [user, setUser] = useState(null);

 const userData = localStorage.getItem('user');
if (userData) {
  setUser(JSON.parse(userData));
}


  console.log("user", user);
  return (
    <div className="admin-dashboard flex">
      {/* Sidebar */}
      <div className="sidebar bg-gray-200 w-64 p-4">
        {/* Sidebar content */}
        <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <a href="#create-event" className="block text-blue-600 hover:text-blue-700 hover:bg-gray-300 rounded px-2 py-1">Create Event</a>
          </li>
          <li>
            <a href="#event-management" className="block text-blue-600 hover:text-blue-700 hover:bg-gray-300 rounded px-2 py-1">Event Management</a>
          </li>
          <li>
            <a href="#booking-management" className="block text-blue-600 hover:text-blue-700 hover:bg-gray-300 rounded px-2 py-1">Booking Management</a>
          </li>
        </ul>
      </div>
      {/* Main content */}
      <div className="main-content flex-grow p-4">
        {/* Content based on sidebar selection */}
        <CreateEvent id="create-event" />
      </div>
    </div>
  );
};

export default AdminDashboard;
