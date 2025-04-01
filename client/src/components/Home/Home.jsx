import React from "react";
import Nav from "../Nav";
import HomeHero from "./HomeHero";

const Home = () => {
  return (
    <div
      className="bg-no-repeat h-screen bg-cover bg-center
        bg-[url('/assets/home/background-home-mobile.jpg')] 
        sm:bg-[url('/assets/home/background-home-tablet.jpg')] 
        xl:bg-[url('/assets/home/background-home-desktop.jpg')]"
    >
      <Nav />
      <HomeHero />
    </div>
  );
};

export default Home;
