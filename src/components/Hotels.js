import React, { useEffect, useState } from "react";

const Hotels = ({ searchTerm }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/hotels`)
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter hotels by search term
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading">
        <div className="shimmer"></div>
        <p>Loading luxury stays...</p>
      </div>
    );
  }

  return (
    <div className="hotels-container">
      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => (
          <div className="card hotel-card fade-in" key={hotel.id}>
            <img src={hotel.imageUrl} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <button>Book Now</button>
          </div>
        ))
      ) : (
        <p className="no-results">
          No hotels found matching “{searchTerm}”
        </p>
      )}
    </div>
  );
};

export default Hotels;
