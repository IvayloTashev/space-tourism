import React from "react";
import moonImg from "../../assets/destination/image-moon.png";
import { destinations } from "../../constants/data.json";

const DestinationHero = () => {
  return (
    <div className="text-white my-[48px] mx-[150px] flex flex-col gap-[24px]">
      <header className="text-[28px]">
        <span className="text-gray-500 mr-2">01</span>PICK YOUR DESTINATION
      </header>
      <div className="flex gap-[32px]">
        <div className="basis-1/2 flex items-center justify-center px-5 py-25">
          <img src={moonImg} width={480} height={480} alt="Planet Image" />
        </div>
        <div className="basis-1/2 flex flex-col justify-center px-10 py-25">
          <section className="mb-[40px]">
            <ul className="flex gap-5 text-[16px]">
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
          </section>

          <section className="mb-[40px]">
            <h2 className="text-[96px]">MOON</h2>
            <p className="text-[18px]">
              See our planet as you've never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you're there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </section>

          <div className="bg-white/20 block h-[2px] w-full"></div>

          <section className="flex gap-[24px] mt-[40px]">
            <div className="basis-1/2 flex flex-col gap-2">
              <p>AVG. DISTANCE</p>
              <p>384,400 km</p>
            </div>
            <div className="basis-1/2 flex flex-col gap-2">
              <p>Est. travel time</p>
              <p>3 days</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DestinationHero;
