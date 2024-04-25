import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventList = () => {
  // Mock data for events (replace with actual data from API or backend)
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Music Concert",
      date: "2024-05-15",
      location: "City Hall",
      imageUrl: "/assets/music_concert.jpeg",
      statement: "Embark on a musical journey like never before!",
    },
    {
      id: 2,
      title: "Art Exhibition",
      date: "2024-06-10",
      location: "Art Gallery",
      imageUrl: "/assets/art_exhibition.jpeg",
      statement: "Discover profound artistry that will ignite your imagination!",
    },
    {
      id: 3,
      title: "Food Festival",
      date: "2024-07-20",
      location: "Park",
      imageUrl: "/assets/food_festival.jpeg",
      statement: "Savor the flavors of joy and delight at our culinary extravaganza!",
    },
    {
      id: 4,
      title: "Fashion Show",
      date: "2024-08-30",
      location: "Convention Center",
      imageUrl: "/assets/fashion_show.jpeg",
      statement: "Experience elegance, glamour, and style in our fashion showcase!",
    },
    {
      id: 5,
      title: "Comedy Night",
      date: "2024-09-15",
      location: "Comedy Club",
      imageUrl: "/assets/comedy_night.jpeg",
      statement: "Laugh your heart out with the funniest comedians in town!",
    },
    {
      id: 6,
      title: "Tech Conference",
      date: "2024-10-25",
      location: "Expo Center",
      imageUrl: "/assets/tech_conference.jpeg",
      statement: "Discover cutting-edge innovations and insights at our tech conference!",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Display the first three events horizontally */}
        {events.slice(0, 3).map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="mb-4">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h2 className="text-lg font-bold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-4">Date: {event.date}</p>
            <p className="text-gray-600 mb-4">Location: {event.location}</p>
            <p className="text-gray-700 mb-4">{event.statement}</p>
            <Link
              to="/booking"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
            >
              Book Tickets
            </Link>
          </div>
        ))}
        {/* Display the next three events horizontally */}
        {events.slice(3, 6).map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="mb-4">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h2 className="text-lg font-bold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-4">Date: {event.date}</p>
            <p className="text-gray-600 mb-4">Location: {event.location}</p>
            <p className="text-gray-700 mb-4">{event.statement}</p>
            <Link
              to="/booking"
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
