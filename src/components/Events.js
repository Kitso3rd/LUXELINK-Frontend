import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      {events.map((event) => (
        <div className="card" key={event.id}>
          <img src={event.imageUrl} alt={event.name} />
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <button>Register</button>
        </div>
      ))}
    </div>
  );
};

export default Events;
