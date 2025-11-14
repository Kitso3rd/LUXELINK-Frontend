import React, { useState } from "react";
import Hotels from "./components/Hotels";
import Events from "./components/Events";
import Flights from "./components/Flights";
import Restaurants from "./components/Restaurants";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState(null); // "hotels" | "events" | "flights" | "restaurants"

  return (
    <div className="App">
      <header className="navbar">
        <h1>LuxeLink</h1>
        <nav>
          <a href="#hotels" onClick={() => setActiveSection("hotels")}>Hotels</a>
          <a href="#events" onClick={() => setActiveSection("events")}>Events</a>
          <a href="#flights" onClick={() => setActiveSection("flights")}>Flights</a>
          <a href="#restaurants" onClick={() => setActiveSection("restaurants")}>Restaurants</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to LuxeLink</h2>
        <p>
          Discover luxury at your fingertips — from elegant hotels and flights to exclusive events and restaurants.  
          LuxeLink connects you to the most refined experiences around the world.
        </p>
        <div className="hero-buttons">
          <button onClick={() => setActiveSection("hotels")}>Explore Hotels</button>
          <button onClick={() => setActiveSection("events")}>Discover Events</button>
          <button onClick={() => setActiveSection("flights")}>Book Flights</button>
          <button onClick={() => setActiveSection("restaurants")}>Reserve Restaurants</button>
        </div>
        <div className="hero-image"></div>
      </section>

      {/* Conditional Content */}
      <div className="content-section">
        {activeSection === "hotels" && (
          <div id="hotels" className="fade-in">
            <h2 className="section-title">Luxury Hotels</h2>
            <Hotels />
          </div>
        )}
        {activeSection === "events" && (
          <div id="events" className="fade-in">
            <h2 className="section-title">Exclusive Events</h2>
            <Events />
          </div>
        )}
        {activeSection === "flights" && (
          <div id="flights" className="fade-in">
            <h2 className="section-title">Available Flights</h2>
            <Flights />
          </div>
        )}
        {activeSection === "restaurants" && (
          <div id="restaurants" className="fade-in">
            <h2 className="section-title">Restaurant Reservations</h2>
            <Restaurants />
          </div>
        )}
      </div>

      <footer>
        © {new Date().getFullYear()} LuxeLink • Crafted for Luxury Experiences
      </footer>
    </div>
  );
}

export default App;
