import React from "react";
import Card from "./Card";
import homepageDog from "./homepageDog.png";
import petCare from "./PetCare.png"; // corrected extension

function CardBelowHome() {
  const services = [
    {
      title: "Pet Adoption",
      description: "Find your forever friend 🐶🐱",
      image: homepageDog
    },
    {
      title: "Pet Care",
      description: "Best grooming and care tips 🛁",
      image: petCare
    },
    {
      title: "Pet Shop",
      description: "Shop food, toys & accessories 🛍️",
      image: "https://imgs.search.brave.com/C75jBgI3438gJTGalmvlfGHniawuNkamdA7UpXOqOeE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzk1LzA1Lzk1/LzM2MF9GXzk5NTA1/OTU0MV9YQVZvSzhn/OWNzdENOSFM5NnhG/OXZTdE5iVHB4dWhU/Zi5qcGc"
    }
  ];

  return (
    <section className="cards-container">
      {services.map((s, index) => (
        <Card key={index} {...s} />
      ))}
    </section>
  );
}

export default CardBelowHome;
