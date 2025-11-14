import React, { useEffect, useState } from "react";
import { fetchEvents } from "../services/api";
import EventRegistrationForm from "./EventRegistrationForm";

function EventList() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card shadow-sm">
              <img src={event.imageUrl} alt={event.name} className="card-img-top" />
              <div className="card-body">
                <h5>{event.name}</h5>
                <p>{event.description}</p>
                <button
                  className="btn btn-success"
                  onClick={() => setSelectedEvent(event)}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <EventRegistrationForm event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default EventList;
