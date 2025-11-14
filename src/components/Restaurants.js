import React, { useEffect, useState } from "react";
import PaymentModal from "./PaymentModal";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/restaurants`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="section-container active fade-in">
      <h2 className="section-title">Reserve a Table</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="cards-grid">
        {filteredRestaurants.map((restaurant) => (
          <div className="card" key={restaurant.id}>
            <img src={restaurant.imageUrl} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <p>
              <strong>Average Cost:</strong> ${restaurant.priceRange}
            </p>
            <button onClick={() => setSelectedRestaurant(restaurant)}>
              Reserve Now
            </button>
          </div>
        ))}
      </div>

      {selectedRestaurant && (
        <PaymentModal
          item={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </div>
  );
};

export default Restaurants;
