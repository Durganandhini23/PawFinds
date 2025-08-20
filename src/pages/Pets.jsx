import React from "react";
import petsData from "./data/pets.json";
import "../css/pets.css";

function Pets() {
  return (
    <div className="page-container">
      <h1 className="page-title">Available Pets</h1>
      <div className="pets-grid">
        {petsData.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <h3>{pet.name}</h3>
            <p>Category: {pet.category}</p>
            <p>Price: ₹{pet.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pets;
