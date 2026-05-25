import React, { useEffect, useState } from "react";
import PaymentModal from "./PaymentModal";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/flights`)
      .then((res) => res.json())
      .then((data) => setFlights(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredFlights = flights.filter((flight) =>
    flight.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="section-container active fade-in">
      <h2 className="section-title">Book Your Flight</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search flights by destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="cards-grid">
        {filteredFlights.map((flight) => (
          <div className="card" key={flight.id}>
            <img src={flight.imageUrl} alt={flight.destination} />
            <h3>{flight.destination}</h3>
            <p>{flight.description}</p>
            <p>
              <strong>Price:</strong> ${flight.price}
            </p>
            <button onClick={() => setSelectedFlight(flight)}>Book Flight</button>
          </div>
        ))}
      </div>

      {selectedFlight && (
        <PaymentModal
          item={selectedFlight}
          onClose={() => setSelectedFlight(null)}
        />
      )}
    </div>
  );
};

export default Flights;
