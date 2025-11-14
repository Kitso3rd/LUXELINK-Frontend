import React, { useEffect, useState } from "react";
import { fetchHotels } from "../services/api";
import BookingForm from "./BookingForm";

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    fetchHotels().then(setHotels);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Hotels</h2>
      <div className="row">
        {hotels.map((hotel) => (
          <div className="col-md-4 mb-4" key={hotel.id}>
            <div className="card shadow-sm">
              <img src={hotel.imageUrl} alt={hotel.name} className="card-img-top" />
              <div className="card-body">
                <h5>{hotel.name}</h5>
                <p>{hotel.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedHotel(hotel)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedHotel && (
        <BookingForm hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
      )}
    </div>
  );
}

export default HotelList;
