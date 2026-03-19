import React from "react";
import ServicesList from "./ServicesList";
import "../styles/Services.css";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>My Expertise</h2>
        <p className="services-subtitle">What I bring to your project</p>

        <ServicesList />
      </div>
    </section>
  );
}

export default Services;
