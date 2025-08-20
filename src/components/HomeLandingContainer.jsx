import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import petImage from "./homeImage.jpg";

function HomeLandingContainer() {
  const navigate = useNavigate();

  return (
    <section className="landing">
      <div className="landing-text">
        <h1>Welcome to PawFinds 🐾</h1>
        <p>Adopt. Love. Care. Find your perfect pet today!</p>
        <button 
          className="explore-btn"
          onClick={() => navigate("/pets")}  // navigate to Pets
        >
          Explore Pets
        </button>
      </div>
      <div className="landing-img">
        <img src={petImage} alt="pets" />
      </div>
    </section>
  );
}

export default HomeLandingContainer;
