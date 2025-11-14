import React, { useEffect, useState } from "react";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/hotels`)
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Hotels</h2>
      {hotels.map((hotel) => (
        <div className="card" key={hotel.id}>
          <img src={hotel.imageUrl} alt={hotel.name} />
          <h3>{hotel.name}</h3>
          <p>{hotel.description}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
