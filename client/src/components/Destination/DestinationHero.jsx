import React, { useState } from "react";
import { destinations } from "../../constants/constants";

const DestinationHero = () => {
  const [planet, setPlanet] = useState("moon");

  return (
    <div className="text-white my-[48px] mx-[150px] flex flex-col gap-[24px]">
      <header className="text-[28px]">
        <span className="text-gray-500 mr-2 !font-bellefair">01</span>PICK YOUR DESTINATION
      </header>
      <div className="flex gap-[32px]">
        <div className="basis-1/2 flex items-center justify-center px-5 py-25">
          <img
            src={destinations[planet].image}
            width={480}
            height={480}
            alt="Planet Image"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-center px-10 py-25">
          <section className="mb-[40px]">
            <ul className="flex gap-5 text-[16px]">
              {Object.keys(destinations).map((item) => (
                <li
                  key={item}
                  onClick={() => setPlanet(item)}
                  className={`cursor-pointer border-solid border-b-3 border-transparent hover:border-white/60 py-1 ${planet === item ? "border-white" : ""}`}
                >
                  {item.toUpperCase()}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-[40px]">
            <h2 className="text-[96px]">{destinations[planet].name.toUpperCase()}</h2>
            <p className="text-[20px]">{destinations[planet].description}</p>
          </section>

          <div className="bg-white/20 block h-[2px] w-full"></div>

          <section className="flex gap-[24px] mt-[40px]">
            <div className="basis-1/2 flex flex-col gap-2">
              <p>AVG. DISTANCE</p>
              <p>{destinations[planet].distance}</p>
            </div>
            <div className="basis-1/2 flex flex-col gap-2">
              <p>Est. travel time</p>
              <p>{destinations[planet].travel}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DestinationHero;
