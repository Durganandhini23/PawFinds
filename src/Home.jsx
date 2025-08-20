import React from "react";
import HomeLandingContainer from "./components/HomeLandingContainer";
import CardBelowHome from "./components/CardBelowHome";
import PlanningToAdoptAPet from "./components/PlanningToAdoptAPet";

export default function Home({ description }) {
  return (
    <main>
      <HomeLandingContainer description={description} />
      <CardBelowHome />
      <PlanningToAdoptAPet />
    </main>
  );
}
