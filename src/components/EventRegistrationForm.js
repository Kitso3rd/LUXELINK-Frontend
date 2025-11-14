import React, { useState } from "react";
import { registerEvent } from "../services/api";

function EventRegistrationForm({ event, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerEvent({ ...formData, eventId: event.id });
    alert("Successfully registered!");
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <h4>Register for {event.name}</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" className="form-control mb-2" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
            <button type="submit" className="btn btn-success me-2">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EventRegistrationForm;
