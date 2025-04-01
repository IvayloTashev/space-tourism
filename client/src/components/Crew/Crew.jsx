import React from "react";
import Nav from "../Nav";
import CrewHero from "./CrewHero";
import bgImage from '../../assets/crew/background-crew-desktop.jpg'

const Crew = () => {
  return (
    <div
      className="bg-no-repeat h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Nav />
      <CrewHero />
    </div>
  );
};

export default Crew;
