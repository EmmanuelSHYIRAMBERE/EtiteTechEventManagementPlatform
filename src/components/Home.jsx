import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [eventsData, setEventsData] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://companyeventmanagement.onrender.com/api/events");
        setEventsData(response.data);
        // Initially show the first three events
        setDisplayedEvents(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Set timeout to switch to the next three events every 5 seconds
    const switchEvents = setInterval(() => {
      // Calculate the index range for the next three events
      const startIndex = (displayedEvents[0]?.id || 0) + 3;
      const endIndex = startIndex + 3 > eventsData.length ? eventsData.length : startIndex + 3;
      // Get the next three events
      const nextEvents = eventsData.slice(startIndex, endIndex);
      setDisplayedEvents(nextEvents.length > 0 ? nextEvents : eventsData.slice(0, 3));
    }, 5000);

    return () => {
      clearInterval(switchEvents);
    };
  }, [eventsData, displayedEvents]);

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <div className="flex justify-center gap-4 overflow-x-auto">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-4 shadow rounded-lg flex flex-col items-center"
              style={{ minWidth: "250px" }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="mb-4 rounded-lg"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-500 mb-2">{event.description}</p>
              <p className="text-sm text-gray-400 mb-2">{formatEventDate(event.date)}</p>
              <p className="text-sm text-gray-400">{event.address}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">
          Discover Unforgettable Events with <b>
            
Etite tech 
          </b>
        </h1>
        <p className="text-lg text-center mb-8">
          Your gateway to immersive experiences, unforgettable memories,
          and endless excitement awaits. Browse our curated collection
          of upcoming events and embark on your next adventure.
        </p>
        <div className="flex justify-center">
          <Link to="/events" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Browse events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
