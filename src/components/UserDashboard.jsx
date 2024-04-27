import React, { useState } from "react";

const UserDashboard = () => {
  // Mock data for user's booked events
  const [bookedEvents, setBookedEvents] = useState([
    { id: 1, title: "Music Concert", date: "2024-05-15", location: "City Hall" },
    { id: 2, title: "Art Exhibition", date: "2024-06-10", location: "Art Gallery" },
  ]);

  const handleCancelBooking = (eventId) => {
    // Simulated logic to cancel booking (remove event from bookedEvents)
    const updatedBookedEvents = bookedEvents.filter((event) => event.id !== eventId);
    setBookedEvents(updatedBookedEvents);
  };

  return (
    <div className="main-content flex-grow p-4">
      {/* Booking table */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Booking Management</h2>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Event Name</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookedEvents.map(event => (
            <tr key={event.id}>
              <td className="border border-gray-300 px-4 py-2">{event.title}</td>
              <td className="border border-gray-300 px-4 py-2">{event.location}</td>
              <td className="border border-gray-300 px-4 py-2">{event.date}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="text-red-600 hover:text-red-700" onClick={() => handleCancelBooking(event.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
