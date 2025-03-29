import React, { useState } from "react";
import { crew } from "../../constants/constants";

const CrewHero = () => {
  const [member, setMember] = useState("01");

  return (
    <div className="text-white my-[48px] mx-[150px] flex flex-col gap-[24px]">
      <header className="text-[28px]">
        <span className="text-gray-500 mr-2 !font-bellefair">02</span>MEET YOUR
        CREW
      </header>
      <div className="flex gap-[32px]">
        <div className="basis-1/2 flex flex-col justify-between">
          <div className="basis-5/6 flex flex-col justify-center">
            <h2 className="text-[32px] text-white/60">{crew[member].role}</h2>
            <p className="text-[56px]">{crew[member].name}</p>
            <p className="text-[19px] text-white/60">{crew[member].bio}</p>
          </div>
          <div className=" basis-1/6 flex items-center gap-10">
            {Object.keys(crew).map((item) => (
              <div
                className={`w-[15px] h-[15px] bg-white/40 rounded-full cursor-pointer hover:bg-white/80 ${
                  member === item ? "bg-white/100" : ""
                }`}
                key={item}
                onClick={() => setMember(item)}
              ></div>
            ))}
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
          <img
            className="w-[539px] h-[676px]"
            src={crew[member].image}
            width={539}
            height={676}
            style={{
              maskImage: "linear-gradient(to bottom, black 85%, rgba(0,0,0,0.2) 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black 85%, rgba(0,0,0,0.2) 92%, transparent)",
            }}
            alt="Crew Image"
          />
        </div>
      </div>
    </div>
  );
};

export default CrewHero;
