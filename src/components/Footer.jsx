import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "../css/footer.css"; 

// React Icons import
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>

      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a className="mail-links" href="mailto:vdurganandhini@gmail.com">
            vdurganandhini@gmail.com
          </a>
        </p>

        {/* Social Links with React Icons */}
        <div className="social-links">
          <a
            className="contact-links"
            href="https://www.linkedin.com/in/durga-nandhini-4276b1259"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            className="contact-links"
            href="https://github.com/Durganandhini23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            className="contact-links"
            href="https://www.instagram.com/itz._.dur_ga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            className="contact-links"
            href="https://wa.me/qr/GBHZTTARIQL2L1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </div>

        <p>&copy; 2024 Durganandhini</p>
      </div>
    </footer>
  );
};

export default Footer;
