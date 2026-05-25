import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to LuxeLink</h1>
      <p>Your premium portal for hotel bookings, event registrations, flight reservations, and restaurant bookings.</p>
      <Link className="btn btn-primary me-2" to="/hotels">View Hotels</Link>
      <Link className="btn btn-success" to="/events">View Events</Link>
    </div>
  );
}

export default Home;
