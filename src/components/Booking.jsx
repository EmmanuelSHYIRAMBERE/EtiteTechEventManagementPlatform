import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Booking = () => {
  const [eventData, setEventData] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`https://etitetecheventmanagementplatformbackend.onrender.com/api/events/${eventId}`);
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleTicketsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setTickets(value);
    validateTickets(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    validatePhoneNumber(value);
  };

  const validateTickets = (value) => {
    if (value <= 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        tickets: "Number of tickets must be greater than 0",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        tickets: null,
      }));
    }
  };

  const validatePhoneNumber = (value) => {
    const phoneRegex = /^[0-9]{10}$/; // Updated to expect 10 digits
    if (!phoneRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Invalid phone number format",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: null,
      }));
    }
  };

  const handleConfirmPayment = async () => {
    if (tickets <= 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        tickets: "Number of tickets must be greater than 0",
      }));
      return;
    }

    if (!phoneNumber || phoneNumber.length !== 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Please enter a valid phone number",
      }));
      return;
    }

    try {
      const bookingData = {
        ticketsBooked: tickets,
        userNumber: phoneNumber,
      };
      const response = await axios.post(`https://etitetecheventmanagementplatformbackend.onrender.com/api/bookings/${eventId}`, bookingData);
      console.log("Booking confirmed:", response.data);
    } catch (error) {
      console.error("Error confirming booking:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Booking Details</h1>
        {eventData ? (
          <div>
            <div className="mb-8 flex">
              <div className="w-1/2 pr-8">
                <label htmlFor="eventName" className="block text-xl font-medium text-gray-800 mb-2">
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={eventData.title}
                  className="input-field text-xl"
                  readOnly
                />
              </div>
              <div className="w-1/2 pl-8">
                <label htmlFor="eventLocation" className="block text-xl font-medium text-gray-800 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  value={eventData.location}
                  className="input-field text-xl"
                  readOnly
                />
              </div>
            </div>
            <div className="mb-8 flex">
              <div className="w-1/2 pr-8">
                <label htmlFor="eventDate" className="block text-xl font-medium text-gray-800 mb-2">
                  Date
                </label>
                <input
                  type="text"
                  id="eventDate"
                  name="eventDate"
                  value={formatEventDate(eventData.date)}
                  className="input-field text-xl"
                  readOnly
                />
              </div>
              <div className="w-1/2 pl-8">
                <label htmlFor="eventPrice" className="block text-xl font-medium text-gray-800 mb-2">
                  Price
                </label>
                <input
                  type="text"
                  id="eventPrice"
                  name="eventPrice"
                  value={eventData.price}
                  className="input-field text-xl"
                  readOnly
                />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="tickets" className="block text-xl font-medium text-gray-800 mb-2">
                Number of Tickets
              </label>
              <input
                type="number"
                id="tickets"
                name="tickets"
                value={tickets}
                onChange={handleTicketsChange}
                className="input-field text-xl"
              />
              {errors.tickets && <p className="text-red-500">{errors.tickets}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="phoneNumber" className="block text-xl font-medium text-gray-800 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="input-field text-xl"
              />
              {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
            </div>
            <div className="mb-8 flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleConfirmPayment}
              >
                Confirm Payment
              </button>
            </div>
          </div>
        ) : (
          <p>Loading event details...</p>
        )}
      </div>
    </div>
  );
};

export default Booking;
