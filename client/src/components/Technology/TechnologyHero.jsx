import React, { useState } from "react";
import image from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import { technology } from "../../constants/constants";

const TechnologyHero = () => {
  const [tech, setTech] = useState('vehicle');

  return (
    <div className="my-[48px] ml-[165px] text-white h-[734px] flex flex-col gap-[24px]">
      <header className="text-[28px]">
        <span className="text-gray-500 mr-2">03</span>SPACE LAUNCH 101
      </header>
      <div className="flex gap-[32px]">
        <div className="basis-1/2 flex items-center gap-[64px]">
          <div className="flex flex-col gap-[32px]">
            {Object.keys(technology).map((item, index) => (
              <p
                className={`w-[80px] h-[80px] text-[32px] rounded-full border border-white/60 flex items-center justify-center cursor-pointer hover:border-white/100 ${tech === item ? 'bg-white text-black' : ''}`}
                key={index}
                onClick={() => setTech(item)}
              >
                {index + 1}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-[32px] text-gray-400 mb-[16px]">
              THE TERMINOLOGY…
            </h2>
            <p className="text-[50px] mb-[24px]">{technology[tech].name.toUpperCase()}</p>
            <p className="text-[18px] text-gray-400">{technology[tech].description}</p>
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-end">
          <img
            src={technology[tech].image}
            className="w-[608px] h-[600px] object-cover"
            alt="Technology Image"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyHero;
