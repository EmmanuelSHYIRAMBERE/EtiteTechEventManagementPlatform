import React from "react";
import {
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import EventList from "./components/EventList";
import Booking from "./components/Booking";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import RequireAuth from "./components/RequireAuth";
import CreateEvent from "./components/CreateEvent";
import BookingManagement from "./components/BookingManagement";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};



function App() {
  return (
    <Routes>
  <Route path="/" element={ <Layout />}>
    {/* Public routes */}
    <Route path="/" element={ <Home />} />
    <Route path="/events" element={ <EventList />} />
    <Route path="/login" element={ <Login />} />
    <Route path="/signup" element={ <Signup />} />

    {/* Protected routes */}
    <Route element={<RequireAuth />}>
      <Route path="/booking/:eventId" element={ <Booking />} />
      <Route path="/admin" element={ <AdminDashboard />} />
      <Route path="/user" element={ <UserDashboard />} />
      <Route path="/createEvent" element={ <CreateEvent />} />
      <Route path="/bookingmanagement" element={ <BookingManagement />} />
    </Route>
  </Route>
</Routes>


  )
}

export default App;
