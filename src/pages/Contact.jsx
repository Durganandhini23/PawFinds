import React from "react";
import "../css/contact.css";
import contactImg from "../pages/Contact.png"; // image path

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left side: Title + Icons + Text */}
      <div className="contact-left">
        <h2 className="contact-title">Let's get in touch</h2>
        <div className="contact-links">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:vdurganandhini@gmail.com">vdurganandhini@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/durganandhini" target="_blank" rel="noopener noreferrer">
              Durganandhini
            </a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/Durganandhini" target="_blank" rel="noopener noreferrer">
              Durganandhini
            </a>
          </div>
          <div className="contact-item">
            <i className="fab fa-instagram"></i>
            <a href="https://www.instagram.com/itz._.dur_ga" target="_blank" rel="noopener noreferrer">
              @itz._.dur_ga
            </a>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <a href="tel:+919597856334">+91 9597856334</a>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="contact-right">
        <img src={contactImg} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
