import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://etitetecheventmanagementplatformbackend.onrender.com/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="mb-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h2 className="text-lg font-bold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">Date: {formatEventDate(event.date)}</p>
            <p className="text-gray-600 mb-2">Location: {event.location}</p>
            <p className="text-gray-700 mb-4">{event.description}</p>
            {event.title === "Fashion Week Rwanda" && (
              <p className="text-gray-800 font-bold">Price: Rwf {event.price}</p>
            )}
            {event.title !== "Fashion Week Rwanda" && (
              <p className="text-gray-800 font-bold">Price: {event.price}</p>
            )}
            <Link
              to={`/booking/${event._id}`} // Include event ID in the URL
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
            >
              Book Tickets
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
