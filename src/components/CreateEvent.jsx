import React, { useState } from 'react';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [ticketAvailable, setTicketAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      date,
      location,
      imageUrl,
      ticketAvailable,
    };
    console.log('New event created:', newEvent);
    setTitle('');
    setDate('');
    setLocation('');
    setImageUrl('');
    setTicketAvailable(true);
  };

  return (
    <div className="create-event p-6">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <label htmlFor="title" className="block">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="date" className="block">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="location" className="block">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="imageUrl" className="block">Image URL:</label>
        <input
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="ticketAvailable" className="block">Ticket Availability:</label>
        <select
          id="ticketAvailable"
          value={ticketAvailable}
          onChange={(e) => setTicketAvailable(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value={true}>Available</option>
          <option value={false}>Sold Out</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
