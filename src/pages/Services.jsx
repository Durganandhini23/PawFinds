import React, { useState } from "react";
import "./PageStyles.css";
import serviceImage from "./Service.webp"; // import the image

function Services() {
  // simple state for form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ✅\n" + JSON.stringify(formData, null, 2));
    // later you can integrate backend or email service here
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Our Services</h1>

      <div className="services-content">
        {/* Left: Services List */}
        <div className="services-text">
          <ul className="page-list">
            <li>🐾 Pet Adoption Guidance</li>
            <li>🛒 Pet Shop – Food, Toys & Accessories</li>
            <li>💉 Veterinary Care & Vaccination</li>
            <li>✂️ Grooming & Training Services</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="services-image">
          <img src={serviceImage} alt="Our Services" />
        </div>
      </div>

      {/* Service Form */}
      <div className="service-form">
        <h2>Book a Service</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="adoption">Pet Adoption Guidance</option>
            <option value="shop">Pet Shop</option>
            <option value="vet">Veterinary Care</option>
            <option value="grooming">Grooming & Training</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Services;
