import React, { useState } from "react";
import petsData from "./data/pets.json";

export default function Pets() {
  const [search, setSearch] = useState("");

  const filtered = petsData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pets-container">
      <h1>Available Pets</h1>
      <input
        type="text"
        placeholder="Search pets..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="pets-list">
        {filtered.map(p => (
          <div key={p.id} className="pet-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.type}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
