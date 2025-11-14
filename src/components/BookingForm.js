import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, hotelId, checkIn, checkOut }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Book a Hotel</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Hotel ID" value={hotelId} onChange={(e) => setHotelId(e.target.value)} required />
        <input type="date" placeholder="Check-in" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
        <input type="date" placeholder="Check-out" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
