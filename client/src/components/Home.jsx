import React from "react";
import bgImage from "../assets/home/background-home-desktop.jpg";
import Nav from "./Nav";
import Hero from "./Hero";

const Home = () => {
  return (
    <div
      className="min-h-[1024px] min-w-[1440px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
