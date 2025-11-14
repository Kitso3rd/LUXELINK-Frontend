import React, { useEffect, useState } from "react";

const Flights = ({ searchTerm }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/flights`)
      .then((res) => res.json())
      .then((data) => {
        setFlights(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredFlights = flights.filter((f) =>
    f.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.airline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading flights...</p>;

  return (
    <div className="flights-container">
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight) => (
          <div className="card" key={flight.id}>
            <img src={flight.imageUrl} alt={flight.airline} />
            <h3>{flight.airline}</h3>
            <p>Destination: {flight.destination}</p>
            <p>Price: ${flight.price}</p>
            <button>Book Flight</button>
          </div>
        ))
      ) : (
        <p>No flights found matching "{searchTerm}"</p>
      )}
    </div>
  );
};

export default Flights;
