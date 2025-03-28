import React from "react";
import Nav from "../Nav";
import CrewHero from "./CrewHero";
import bgImage from '../../assets/crew/background-crew-desktop.jpg'

const Crew = () => {
  return (
    <div
      className="min-h-[1024px] min-w-[1440px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Nav />
      <CrewHero />
    </div>
  );
};

export default Crew;
